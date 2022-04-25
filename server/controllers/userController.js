const query = require('../db/query');
const parseQueryAndReturn = require('../db/parseQueryAndReturn');

const userController = {
  createUser: (req, res, next) => {
    // body should contain username, password, name, email,
    const { username, password, name, email } = req.body;

    // if any of the fields are not filled out, return a specific error
    if (!username) {
      return next({
        log: 'Invalid username field in userController.createUser',
        message: { err: 'Please enter a valid username.' },
      });
    }
    if (!password) {
      return next({
        log: 'Invalid password field in userController.createUser',
        message: { err: 'Please enter a valid password.' },
      });
    }
    if (!name) {
      return next({
        log: 'Invalid name field in userController.createUser',
        message: { err: 'Please enter a valid name.' },
      });
    }
    if (!email) {
      return next({
        log: 'Invalid email field in userController.createUser',
        message: { err: 'Please enter a valid email.' },
      });
    }

    const newUserInfo = { username, password, name, email };
    // create student in the database w/ destructured properties
    const newUser = parseQueryAndReturn('INSERT', 'users', newUserInfo);

    // store new user in res.locals to serve back to client
    res.locals.newUser = newUser;

    return next();
  },

  verifyUser: (req, res, next) => {
    // body should contain username, password, - maybe userID as well?
    const { username, password } = req.body;

    // if any fields are not filled out, return specific error
    if (!username) {
      return next({
        log: 'Invalid username field in userController.verifyUser',
        message: { err: 'Please enter a valid username.' },
      });
    }
    if (!password) {
      return next({
        log: 'Invalid password field in userController.verifyUser',
        message: { err: 'Please enter a valid password.' },
      });
    }

    const loginInfo = { username, password };

    // query DB to see if user and password combo exist
    const user = parseQueryAndReturn('SELECT', 'users', loginInfo);

    // store returned user object into res.locals
    res.locals.user = user;

    return next();
  },

  updateUser: (req, res, next) => {
    // username to be updated with be in the request parameters
    const username = req.params.username;

    // information to update included in the request body
    const newUserInfo = req.body;

    // query DB to update the user (by their ID)
    const updatedUser = parseQueryAndReturn('UPDATE', 'users', {
      ...newUserInfo,
    });

    // store updated user in res.locals to send back to client
    res.locals.updatedUser = updatedUser;

    return next();
  },

  loadUserDashboard: (req, res, next) => {
    // get the current user from res.locals.user
    const username = req.params.username;
    console.log('get request received for', username)

    // query the database to get the user's tracklist
    const userTracks = parseQueryAndReturn('SELECT', 'userTracks', {
      username: username,
    });

    // store the tracklist in res.locals
    res.locals.userTracks = userTracks;
    return next();
  },

  addTrack: (req, res, next) => {
    const username = req.params.username;
    const { name, album, artist, genre, rating, review } = req.body;
    const newTrack = parseQueryAndReturn('INSERT', 'tracks', {
      username: username,
      name,
      album,
      artist,
      genre,
      rating,
      review
    })
    res.locals.newTrack = newTrack;
    return next();
  }
};

module.exports = userController;
