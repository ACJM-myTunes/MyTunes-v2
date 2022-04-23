const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// import routers
const searchRouter = require('./routes/searchRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

// server routing
app.use('/search', searchRouter);

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

app.use('/search', searchRouter);

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
