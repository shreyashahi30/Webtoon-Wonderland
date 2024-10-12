// server/models/webtoon.js
const mongoose = require('mongoose');

const webtoonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
});

const Webtoon = mongoose.model('Webtoon', webtoonSchema);
module.exports = Webtoon;

