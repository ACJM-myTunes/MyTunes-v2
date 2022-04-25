const path = require('path');
const Database = require('better-sqlite3');

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
    const data = valsArray ? statement.run(...valsArray) : statement.run();
    return data['lastInsertRowid'];
  }
  catch (err) {console.log(`Error with insert db function: ${err}`);}
}

select = (tableName, paramsObj) => {
  const valsArray = Object.values(paramsObj);
  switch (tableName) {
    case 'tracks':
      stmt += 'SELECT tracks.name AS name, albums.name AS album, artists.name AS artist, genres.name AS genre ';
      stmt += 'FROM tracks JOIN albums ON tracks.album_id=albums._id ';
      stmt += 'JOIN artists ON tracks.artist_id=artists._id ';
      stmt += 'JOIN genres ON tracks.genre_id=genres._id ';
      stmt += 'WHERE tracks.name=?;'
    case 'reviews':

  }

  try {
    const statement = db.prepare(stmt);
    // console.log(valsArray);
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