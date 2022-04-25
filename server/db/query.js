const path = require('path');
const Database = require('better-sqlite3');
const { table } = require('console');

let db = new Database(path.join(__dirname, './myTunes.db'));

stmtSlice2 = () => stmt = stmt.slice(0, -2);
let stmt = '';
  
insert = (tableName, paramsObj) => {
  const valsArray = Object.values(paramsObj);
  stmt += `INSERT INTO ${tableName} (`;
  for (const colName of Object.keys(paramsObj)) stmt += `${colName}, `;
  stmtSlice2();
  stmt += ') VALUES (';
  for (const val of valsArray) stmt += '?, ';
  stmtSlice2();
  stmt += ');';
  try {
    const statement = db.prepare(stmt);
    stmt = '';
    const data = valsArray ? statement.run(...valsArray) : statement.run();
    // returns row ID for use when creating new album, artist, genre tables to link to track
    return data['lastInsertRowid'];
  }
  catch (err) {console.log(`Error with insert db function: ${err}`);}
}

select = (tableName, paramsObj) => {
  const valsArray = Object.values(paramsObj);
  // console.log(paramsObj);
  switch (tableName) {
    case 'tracks':
      stmt += 'SELECT tracks._id, tracks.name AS name, albums.name AS album, artists.name AS artist, genres.name AS genre ';
      stmt += 'FROM tracks JOIN albums ON tracks.album_id=albums._id ';
      stmt += 'JOIN artists ON tracks.artist_id=artists._id ';
      stmt += 'JOIN genres ON tracks.genre_id=genres._id ';
      stmt += `WHERE tracks.name=?;`
      break;
    case 'reviews':
      stmt += 'SELECT rating, review ';
      stmt += `FROM reviews JOIN tracks ON reviews.track_id=tracks._id `;
      stmt += 'WHERE tracks._id=?;'
      break;
    // for album, artist, genre: returns {id: _id} for use when linking track to these tables
    case 'albums': case 'artists': case 'genres':
      stmt += 'SELECT _id AS id ';
      stmt += `FROM ${tableName} `;
      stmt += `WHERE ${tableName}.name=?;`
      break;
    case 'users':
      stmt += 'SELECT _id, username, password, email, name ';
      stmt += 'FROM users ';
      stmt += 'WHERE users.username=?'
      break;
    case 'userTracks':
      console.log('preparing userTracks stmt...');
      stmt = 'SELECT tracks.name AS name, albums.name AS album, artists.name AS artist, '
      stmt += 'genres.name AS genre, reviews.rating AS rating, reviews.review AS review '
      stmt += 'FROM users '
      stmt += 'JOIN userTracks '
      stmt += 'ON users._id = userTracks.user_id '
      stmt += 'JOIN reviews ON userTracks.review_id = reviews._id '
      stmt += 'JOIN tracks ON reviews.track_id = tracks._id '
      stmt += 'JOIN albums ON tracks.album_id = albums._id '
      stmt += 'JOIN artists ON tracks.artist_id = artists._id '
      stmt += 'JOIN genres ON tracks.genre_id = genres._id '
      stmt += 'WHERE users._id=?;'
      break;
    default:
      console.log('no table name matched in query function')
  }
  
  try {
    // console.log(stmt);
    // console.log(valsArray);
    const statement = db.prepare(stmt);
    console.log(stmt);
    stmt = '';
    if (tableName === 'userTracks') return valsArray ? statement.all(...valsArray) : statement.all();
    return valsArray ? statement.get(...valsArray) : statement.get();
  }
  catch (err) {console.log(`Error with select db function: ${err}`);}
  
}

update = (tableName, paramsObj) => {
  
}


module.exports = query = {
  insert,
  select,
  update
}