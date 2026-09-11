const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const enquiryController = require('../controllers/enquiryController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../public/uploads/enquiries');
    const fs = require('fs');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

router.post('/', upload.single('attachment'), enquiryController.createEnquiry);
router.get('/', enquiryController.getEnquiries);

module.exports = router;
