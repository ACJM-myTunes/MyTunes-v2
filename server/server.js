const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// import routers

const spotifyRouter = require('./routes/spotifyRouter');
const playlistRouter = require('./routes/playlistRouter');
const trackRouter = require('./routes/trackRouter');
const reviewRouter = require('./routes/reviewRouter');
const followsRouter = require('./routes/followingReviewsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../public')));

// server routing

app.use('/api/auth/spotify', spotifyRouter);
app.use('/api/playlists', playlistRouter);
app.use('/api/tracks', trackRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/follows', followsRouter);
// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Sorry, this page does not exist.'));

//global eror handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
