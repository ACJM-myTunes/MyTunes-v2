const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

/**
 * CREATE a new user
 */
userRouter.post('/signup', userController.createUser, (req, res) => {
  // return/serve the created user object to the client
  return res.status(200).json(res.locals.newUser);
});

/**
 * Login (READ)
 */
userRouter.post(
  '/login',
  userController.verifyUser,
  userController.loadUserDashboard,
  (req, res) => {
    return res.status(200).json(res.locals.userTracks);
  }
);

/**
 * UPDATE a user
 */
userRouter.post(
  '/:username',
  userController.verifyUser,
  userController.updateUser,
  (req, res) => {
    return res.status(200).json(res.locals.updatedUser);
  }
);

userRouter.post(
  '/addTrack/:username',
  userController.addTrack,
  (req, res) => {
    return res.status(200).json(res.locals.newTrack);
  }
)

/**
 * Load a user dashboard (READ)
 */
userRouter.get('/:username', userController.loadUserDashboard, (req, res) => {
  // serve up the user dashboard
  return res.status(200).json(res.locals.userTracks);
});

module.exports = userRouter;
