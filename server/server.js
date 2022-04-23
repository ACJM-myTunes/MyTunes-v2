const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// Sqlite database setup
const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const server = http.createServer(app);
const db = new sqlite3.Database('./db/myTunes.db');

const searchRouter = require('./routes/searchRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/search', searchRouter);

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
