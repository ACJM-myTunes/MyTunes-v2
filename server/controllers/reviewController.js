const db = require('../models');
const reviewController = {
  addReview: async (req, res, next) => {
    const { trackId, rating, review, title } = req.body;
    const { username } = req.cookies;

    const queryStringSave = `INSERT INTO review (trackid, username, rating, review, title) VALUES ($1, $2, $3, $4, $5)`;
    const values = [trackId, username, rating, review, title];
    db.query(queryStringSave, values, (err, review) => {
      if (err) {
        console.log('ERR in INSERT Review Query');
        console.log(err);
      } else {
        res.locals.review = review;
        return next();
      }
    });
  },

  getReview: async (req, res, next) => {
    const { username } = req.cookies;
    const queryString = `SELECT * FROM review where username=($1)`;
    try {
      const userReviews = await db.query(queryString, [username]);
      res.locals.reviews = userReviews.rows;
      return next();
    } catch (err) {
      (err) => next(err);
    }
  },
  // UPDATE table_name
  // SET column1 = value1, column2 = value2...., columnN = valueN
  // WHERE [condition];
  updateReview: async (req, res, next) => {
    const { id, review, rating } = req.body;

    const queryStringUpdate = `UPDATE review SET rating = ($1), review = ($2) WHERE id = ($3)`;

    try {
      await db.query(queryStringUpdate, [rating, review, id]);
      return next();
    } catch (err) {
      (err) => next(err);
    }
  },
  deleteReview: async (req, res, next) => {
    const reviewId = req.params.reviewId;
    const queryString = `DELETE FROM review WHERE id=($1)`;
    try {
      await db.query(queryString, [reviewId]);
      return next();
    } catch (err) {
      (err) => next(err);
    }
  },
  getTrackReview: async (req, res, next) => {
    const { trackId } = req.params;
    const queryString = `SELECT * FROM review where trackid=($1)`;
    try {
      const trackReviews = await db.query(queryString, [trackId]);
      res.locals.trackReviews = trackReviews;
      return next();
    } catch (err) {
      (err) => next(err);
    }
  },
};

module.exports = reviewController;
