const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Import routes
const pageRoutes = require('./routes/pageRoutes');
const postRoutes = require('./routes/postRoutes');
const productRoutes = require('./routes/productRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const settingRoutes = require('./routes/settingRoutes');
const itemRoutes = require('./routes/itemRoutes');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    database: {
      status: dbStatus,
      name: mongoose.connection.name || 'bestcastgroup'
    },
    system: {
      uptime: process.uptime(),
      nodeVersion: process.version
    }
  });
});

// API Routes
app.use('/api/pages', pageRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/products', productRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/settings', settingRoutes);
app.use('/api/items', itemRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=================================`);
});
