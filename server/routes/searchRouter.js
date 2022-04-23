const express = require('express');
const searchController = require('../controllers/searchController');
const searchRouter = express.Router();

searchRouter.use('/', (req, res) => {
  console.log(req.url);

  // get relative url
  const relativeURL = req.url.RequestURI(); // "search/<menuSelection>/:queryField"
  console.log(relativeURL);

  // get indices of the slashes
  const firstSlashIndex = relativeURL.indexOf('/');
  const secondSlashIndex = relativeURL.slice(firstSlashIndex).indexOf('/');

  // slice/splice out the characters between the slashes as a string,
  const menuSelection = relativeURL.slice(firstSlashIndex, secondSlashIndex);
  console.log(menuSelection);

  // save the menu selection into res.locals
  res.locals.menuSelection = menuSelection;

  // hand off to controller
  return searchRouter.get(
    // use the menuSelection as the endpoint of the search
    `/${menuSelection}`,
    searchController.getTracks,
    (req, res) => {
      // return the list of tracks to the client
      return res.status(200).json(res.locals.tracks);
    }
  );
});

module.exports = searchRouter;
