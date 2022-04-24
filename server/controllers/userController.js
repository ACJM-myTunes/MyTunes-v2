const userController = {
  createUser: (req, res, next) => {
    // body should contain username, password, email,
    const { username, password, email } = req.body;

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
    if (!email) {
      return next({
        log: 'Invalid email field in userController.createUser',
        message: { err: 'Please enter a valid email.' },
      });
    }
  },

  loadUserDashboard: (req, res, next) => {},
};

module.exports = userController;
