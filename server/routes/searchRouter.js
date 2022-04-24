const express = require('express');
const searchController = require('../controllers/searchController');
const searchRouter = express.Router();

searchRouter.get(
  '/track/:trackname',
  searchController.getTrackReviews,
  (req, res) => {
    return res.status(200).json(res.locals.trackReviews);
  }
);

searchRouter.get(
  '/*/:queryField',
  searchController.getMenuSelection,
  searchController.getTracks,
  (req, res) => {
    return res.status(200).json(res.locals.tracks);
  }
);

module.exports = searchRouter;
