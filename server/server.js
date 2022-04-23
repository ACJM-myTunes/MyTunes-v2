const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// Sqlite database setup
//const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const server = http.createServer(app);
//const db = new sqlite3.Database('./db/MyTunes.db');

// let runScript;
// runScript = `CREATE TABLE IF NOT EXISTS Users (
// 	_id integer PRIMARY KEY AUTOINCREMENT,
// 	username text,
// 	password text,
// 	email text,
// 	Name text
// )`;

// CREATE TABLE IF NOT EXISTS Albums (
// 	_id integer PRIMARY KEY AUTOINCREMENT,
// 	Name text,
// 	genre_id integer
// );

// CREATE TABLE IF NOT EXISTS Tracks (
// 	_id integer PRIMARY KEY AUTOINCREMENT,
// 	Name text,
// 	album_id integer,
// 	genre_id integer,
// 	artist_id integer
// );

// CREATE TABLE IF NOT EXISTS Genres (
// 	_id integer PRIMARY KEY AUTOINCREMENT,
// 	Name text
// );

// CREATE TABLE IF NOT EXISTS Artists (
// 	_id integer PRIMARY KEY AUTOINCREMENT,
// 	Name text
// );

// CREATE TABLE IF NOT EXISTS userTracks (
// 	user_id integer,
// 	track_id integer,
// 	review_id integer
// );

// CREATE TABLE IF NOT EXISTS Reviews (
// 	_id integer PRIMARY KEY AUTOINCREMENT,
// 	Rating integer,
// 	Review text
// );

// CREATE TABLE IF NOT EXISTS userFriends (
// 	user_id integer,
// 	friend_id integer
// );

// db.run(runScript);

// app.get('/', (req, res) => {
//   console.log('got')
//   res.sendFile(path.join(__dirname, '/index.html'))
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
