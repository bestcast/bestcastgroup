const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Item = require('../models/Item');

// In-memory fallback if MongoDB connection is not active (prevents API failure during setup)
let inMemoryItems = [
  { _id: '1', title: 'Welcome to your App', description: 'This sample item is pre-populated to verify your React + Node API integration.', status: 'completed', createdAt: new Date() },
  { _id: '2', title: 'Connect MongoDB Database', description: 'Ensure MongoDB is running or update MONGO_URI in backend/.env', status: 'in-progress', createdAt: new Date() }
];

// @route   GET /api/items
// @desc    Get all items
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const items = await Item.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: items.length, source: 'mongodb', data: items });
    } else {
      return res.status(200).json({ success: true, count: inMemoryItems.length, source: 'in-memory (MongoDB offline)', data: inMemoryItems });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   POST /api/items
// @desc    Create new item
router.post('/', async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, message: 'Title is required' });
    }

    if (mongoose.connection.readyState === 1) {
      const newItem = await Item.create({ title, description, status });
      return res.status(201).json({ success: true, data: newItem });
    } else {
      const newItem = {
        _id: String(Date.now()),
        title,
        description: description || '',
        status: status || 'pending',
        createdAt: new Date(),
      };
      inMemoryItems.unshift(newItem);
      return res.status(201).json({ success: true, source: 'in-memory (MongoDB offline)', data: newItem });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   DELETE /api/items/:id
// @desc    Delete item
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (mongoose.connection.readyState === 1) {
      const deletedItem = await Item.findByIdAndDelete(id);
      if (!deletedItem) {
        return res.status(404).json({ success: false, message: 'Item not found' });
      }
      return res.status(200).json({ success: true, data: deletedItem });
    } else {
      inMemoryItems = inMemoryItems.filter((item) => item._id !== id);
      return res.status(200).json({ success: true, message: 'Item deleted from in-memory store' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
