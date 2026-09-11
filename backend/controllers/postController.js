const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ status: 'publish' }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: posts.length, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await Post.findOne({ slug });
    if (!post) {
      return res.status(404).json({ success: false, message: `Post not found: ${slug}` });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
