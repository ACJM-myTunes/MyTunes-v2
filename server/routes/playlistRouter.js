const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getUserPlaylists, (req, res, next) => {
  console.log('playlist endpoint hit!');
  res.status(200).json(res.locals.playlists.items);
});
// .get('/:playlistId')
router.get(
  '/:playlistId',
  userController.getPlaylistTracks,
  (req, res, next) => {
    console.log('playlist endpoint hit!');
    res.status(200).json(res.locals.playlist.items);
  }
);

module.exports = router;
