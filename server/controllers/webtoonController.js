// server/controllers/webtoonController.js
const Webtoon = require('../models/webtoon');

// Get all webtoons
exports.getAllWebtoons = async (req, res) => {
    try {
        const webtoons = await Webtoon.find();
        res.status(200).json(webtoons);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching webtoons', error });
    }
};

// Create a new webtoon (optional)
exports.createWebtoon = async (req, res) => {
    const { title, image, description } = req.body;

    const newWebtoon = new Webtoon({ title, image, description });
    try {
        await newWebtoon.save();
        res.status(201).json(newWebtoon);
    } catch (error) {
        res.status(500).json({ message: 'Error creating webtoon', error });
    }
};

