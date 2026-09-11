const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, default: '' },
  material: { type: String, default: '' },
  weightRange: { type: String, default: '' },
  industry: { type: String, default: '' },
  image: { type: String, default: '' },
  features: [String]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
