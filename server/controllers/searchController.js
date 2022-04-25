const query = require('../db/query');
const parseQueryAndReturn = require('../db/parseQueryAndReturn');
function setTableName(menuSelection) {
  return menuSelection === 'ratings' ? 'reviews' : menuSelection
}

const searchController = {
  getMenuSelection: (req, res, next) => {
    // get relative url
    const relativeURL = req.url; // "search/<menuSelection>/:queryField"

    // get indices of the slashes
    // const secondSlashIndex = relativeURL.slice(1).indexOf('/');

    // // slice/splice out the characters between the slashes as a string,
    // const menuSelection = relativeURL.slice(1, secondSlashIndex + 1);
    const menuSelection = req.params.menuSelection;
    const userName = req.params.userName;
    console.log(menuSelection, userName);
    // save the menu selection into res.locals
    res.locals.menuSelection = menuSelection;
    res.locals.userName = userName;
    return next();
  },

  getTracks: (req, res, next) => {
    // get the category/menuselection saved in res.locals from searchRouter
    const menuSelection = res.locals.menuSelection;

    // get the queryField from the request params
    // had to slice off a ':' from the beginning of query field
    const queryField = req.params.queryField;

    // query the database to get all the tracks that match the queryField
    const tableName = menuSelection === 'ratings' ? 'reviews' : menuSelection;
    const track = parseQueryAndReturn('SELECT', tableName, {name: queryField})
    //    store the tracks in the res.locals object
    res.locals.tracks = track;
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

  getTrackReviews: (req, res, next) => {
    // track name is in request parameters
    const trackName = req.params.trackName;

    // query database to find the track
    const track = parseQueryAndReturn('SELECT', 'tracks', { name: trackName });
    // console.log(`track being reviewed: ${track}, id: ${track._id}`)

    // query database for all reviews keyed to trackID
    const trackReviews = parseQueryAndReturn('SELECT', 'reviews', {
      _id: track._id,
    });

    // store track reviews in res.locals to send to client
    res.locals.trackReviews = trackReviews;
    return next();
  },
};

module.exports = searchController;
