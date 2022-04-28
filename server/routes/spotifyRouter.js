const express = require('express');
const userController = require('../controllers/userController');
const db = require('../models');

const router = express.Router();

router.get('/', userController.getSpotifyToken, async (req, res, next) => {
  const username = res.locals.user.email;
  const password = res.locals.user.id;
  const newUserInfo = [username, password];
  //check if user exist in database
  try {
    const queryString = `SELECT username FROM users WHERE username=($1)`;

    const userExists = await db.query(queryString, [username]);
    console.log(userExists)
    if (userExists.rowCount === 0) {
      const newUserQuery = `INSERT INTO users (username, password) VALUES ($1, $2)`;
      await db.query(newUserQuery, newUserInfo);
    }
    // res.status(200).json({
    //   username,
    // });
    res.redirect('http://localhost:8080/');
  } catch (err) {
    console.log(err);
    // res.sendStatus(400);
    return next(err);
  }

  // create student in the database w/ destructured properties

  // store new user in res.locals to serve back to client
});

module.exports = router;
