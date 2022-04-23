// const db = require('../db/myTunes.db');

const searchController = {
  getMenuSelection: (req, res, next) => {
    // get relative url
    const relativeURL = req.url; // "search/<menuSelection>/:queryField"

    // get indices of the slashes
    const secondSlashIndex = relativeURL.slice(1).indexOf('/');

    // slice/splice out the characters between the slashes as a string,
    const menuSelection = relativeURL.slice(1, secondSlashIndex + 1);

    // save the menu selection into res.locals
    res.locals.menuSelection = menuSelection;

    return next();
  },

  getTracks: (req, res, next) => {
    // get the category/menuselection saved in res.locals from searchRouter
    const menuSelection = res.locals.menuSelection;
    console.log('menuSelect from res local', menuSelection);

    // get the queryField from the request params
    const queryField = req.params.queryField;
    console.log('your query field:', queryField);

    // query the database to get all the tracks that match the queryField

    //    store the tracks in the res.locals object

    //    hand off to anonymous handler function in searchRouter
    return next();

    // if there's an error, invoke global error handler
    // .catch(err => {
    //   return next({
    //     log: 'Error occured in searchController.getTracks',
    //     status: 400,
    //     message: { err }
    //   })
    // })
  },
};

module.exports = searchController;
