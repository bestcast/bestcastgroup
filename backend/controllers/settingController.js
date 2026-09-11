const Setting = require('../models/Setting');

exports.getSettings = async (req, res) => {
  try {
    const settings = await Setting.find();
    const formatted = {};
    settings.forEach(s => {
      formatted[s.key] = s.value;
    });
    res.status(200).json({ success: true, data: formatted });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
