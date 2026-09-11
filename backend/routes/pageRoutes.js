const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.getAllPages);
router.get('/:slug', pageController.getPageBySlug);

module.exports = router;
