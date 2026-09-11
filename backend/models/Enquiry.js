const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  type: { type: String, enum: ['enquiry', 'career'], default: 'enquiry' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  company: { type: String, default: '' },
  subject: { type: String, default: '' },
  message: { type: String, default: '' },
  attachmentUrl: { type: String, default: '' },
  status: { type: String, enum: ['new', 'in-review', 'responded', 'archived'], default: 'new' }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);
