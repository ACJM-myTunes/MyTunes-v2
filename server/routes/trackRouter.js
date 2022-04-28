const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getTracks, (req, res, next) => {
  console.log('tracks endpoint hit!');
  res.status(200).json(res.locals.tracks);
});

module.exports = router;
