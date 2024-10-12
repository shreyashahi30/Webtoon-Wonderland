// server/routes/webtoons.js
const express = require('express');
const router = express.Router();
const webtoonController = require('../controllers/webtoonController');

// Route to get all webtoons
router.get('/', webtoonController.getAllWebtoons);

// Route to create a new webtoon (optional)
router.post('/', webtoonController.createWebtoon);

module.exports = router;

