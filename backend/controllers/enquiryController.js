const Enquiry = require('../models/Enquiry');

exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, company, subject, message, type } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and Email are required.' });
    }

    let attachmentUrl = '';
    if (req.file) {
      attachmentUrl = `/uploads/enquiries/${req.file.filename}`;
    }

    const enquiry = await Enquiry.create({
      type: type || 'enquiry',
      name: name.trim(),
      email: email.trim(),
      phone: (phone || '').trim(),
      company: (company || '').trim(),
      subject: (subject || '').trim(),
      message: (message || '').trim(),
      attachmentUrl
    });

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been received successfully! Our engineering team will contact you shortly.',
      data: enquiry
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
