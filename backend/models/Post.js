const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, default: '' },
  excerpt: { type: String, default: '' },
  status: { type: String, default: 'publish' },
  author: { type: String, default: 'Admin' },
  category: { type: String, default: 'Uncategorized' },
  featuredImage: { type: String, default: '' },
  seo: {
    title: String,
    description: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
