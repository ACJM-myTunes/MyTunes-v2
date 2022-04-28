const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

router.get('/', reviewController.getReview, (req, res, next) => {
  console.log('Review has been fetched!');
  res.status(200).json(res.locals.reviews);
});

router.post('/', reviewController.addReview, (req, res, next) => {
  console.log('Review has been added!');
  res.status(200).json(res.locals.review);
});

router.delete('/:reviewId', reviewController.deleteReview, (req, res, next) => {
  console.log('Review has been deleted!');
  res.status(200).json('Review has been deleted!');
});

router.patch('/', reviewController.updateReview, (req, res, next) => {
  console.log('Review has been updated!');
  res.status(200).json('Review has been updated!');
});

router.get('/:trackId', reviewController.getTrackReview, (req, res, next) => {
  console.log('Review has been fetched!');
  res.status(200).json(res.locals.trackReviews.rows);
});
module.exports = router;
