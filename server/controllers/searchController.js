const query = require('../db/query');
const parseQueryAndReturn = require('../db/parseQueryAndReturn');
function setTableName(menuSelection) {
  return menuSelection === 'ratings' ? 'reviews' : menuSelection;
}

const searchController = {
  getUser: (req, res, next) => {
    const user = parseQueryAndReturn('SELECT', 'users', req.params.username);
    res.locals.user = user;
    return next();
  },

  getTracks: (req, res, next) => {
    // get the queryField from the request params
    const queryField = req.params.queryField;
    const tableName = req.params.menuSelection;
    const user = res.locals.user;
    console.log('user', user);

    // query the database to get all the tracks that match the queryField
    const tracks = parseQueryAndReturn('SELECT', tableName, {
      queryField,
    });
    //    store the tracks in the res.locals object
    res.locals.tracks = tracks;
    console.log(tracks);
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
