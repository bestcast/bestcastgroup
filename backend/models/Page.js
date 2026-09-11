const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, default: '' },
  excerpt: { type: String, default: '' },
  status: { type: String, default: 'publish' },
  menuOrder: { type: Number, default: 0 },
  seo: {
    title: String,
    description: String,
    keywords: [String]
  },
  sections: [mongoose.Schema.Types.Mixed]
}, { timestamps: true });

module.exports = mongoose.model('Page', pageSchema);
