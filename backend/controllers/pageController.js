const Page = require('../models/Page');

exports.getAllPages = async (req, res) => {
  try {
    const pages = await Page.find({ status: 'publish' }).select('id title slug menuOrder excerpt seo');
    res.status(200).json({ success: true, count: pages.length, data: pages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getPageBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const page = await Page.findOne({ slug });
    if (!page) {
      return res.status(404).json({ success: false, message: `Page not found: ${slug}` });
    }
    res.status(200).json({ success: true, data: page });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
