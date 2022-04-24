const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

// create a new user
userRouter.post('/', userController.createUser, (req, res) => {});

// loading a user by their username
userRouter.get('/:username', (req, res) => {
  // serve up the user dashboard
  return res.status(200).json(res.locals.userDashboard);
});

// verify/validate user

module.exports = userRouter;
