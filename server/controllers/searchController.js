const db = require('../db/myTunes.db');

const searchController = {
  getTracks: (req, res, next) => {
    // get the category/menuselection saved in res.locals from searchRouter
    const menuSelection = res.locals.menuSelection;

    // get the queryField from the request params
    const queryField = req.params.queryField;
    console.log(queryField);

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
