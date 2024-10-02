// Express routes for reviews
const express = require('express');
const Review = require('../models/reviewModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ bookId: req.query.bookId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { userId, bookId, rating, comment } = req.body;
  const review = new Review({ userId, bookId, rating, comment });

  try {
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
