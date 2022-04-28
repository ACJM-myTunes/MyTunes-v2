const express = require('express');
const db = require('../models');

const router = express.Router();

// get reviews of people the user is following
router.get('/reviews', async (req, res, next) => {
  const { username } = req.cookies;
  const queryString = `SELECT r.id, r.trackid, r.title, r.username,  review, rating FROM review AS r LEFT JOIN follows AS fol ON r.username = fol.following WHERE fol.username = ($1)`;
  try {
    const reviews = await db.query(queryString, [username]);

    res.status(200).json(reviews.rows);
  } catch (err) {
    (err) => console.log(err);
    return next(err);
  }
});

// get the list of people the user is following
router.get('/', async (req, res, next) => {
  const { username } = req.cookies;
  try {
    const queryString = `SELECT id, following from follows WHERE username = ($1)`;
    const followingList = await db.query(queryString, [username]);
    res.status(200).json(followingList.rows);
  } catch (err) {
    (err) => {
      console.log(err);
      return next(err);
    };
  }
});

// follow new user
router.post('/', async (req, res, next) => {
  const following = req.body.following;
  const { username } = req.cookies;
  // const { username } = req.cookies;
  // const queryString = `INSERT INTO follows (username, following) SELECT 'hyojin.jessica.lee@gmail.com', 'corey.neil.morrison@gmail.com' WHERE NOT EXISTS ( SELECT 1 FROM follows WHERE username = 'hyojin.jessica.lee@gmail.com' AND following = 'corey.neil.morrison@gmail.com')`;
  // const queryString = `INSERT INTO follows (username, following) SELECT ($1), ($2) WHERE NOT EXISTS ( SELECT 1 FROM follows WHERE username = ($1) AND following = ($2)`;
  try {
    const checkUser = `SELECT * FROM users WHERE username = ($1)`;
    const validUsername = await db.query(checkUser, [following]);
    if (validUsername.rowCount === 0) {
      return next({
        log: 'Error occurred with POST request to follow an user',
        status: 400,
        message: { err: 'Invalid username' },
      });
    }
    const queryString = `SELECT 1 FROM follows WHERE username = ($1) AND following = ($2)`;
    const isExisting = await db.query(queryString, [username, following]);
    if (isExisting.rowCount > 0) {
      return next({
        log: 'Error occurred with POST request to follow an user',
        status: 400,
        message: { err: 'Already following this user' },
      });
    }
    const queryStringAdd = `INSERT INTO follows (username, following) SELECT ($1), ($2)`;
    await db.query(queryStringAdd, [username, following]);
    console.log('success!');
    return res.status(200).json(`Success! Following ${following}`);
  } catch (err) {
    (err) => {
      console.log(err);
      return next(err);
    };
  }
});

router.delete('/', async (req, res, next) => {
  const { following } = req.body;
  const { username } = req.cookies;
  try {
    const queryString = `DELETE from follows WHERE username = ($1) AND following = ($2)`;
    await db.query(queryString, [username, following]);
    res.status(200).json('Successfully unfollowwed');
  } catch (err) {
    (err) => {
      console.log(err);
      return next(err);
    };
  }
});

module.exports = router;
