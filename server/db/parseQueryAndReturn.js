const query = require('./query');

  // for insert, params should be an object like:
  //   {
  //     columnName1: value1,
  //     colName2: val2,
  //   }
function parseQueryAndReturn(operation, tableName, paramsObj) {
  
  insertQuery = () => {
    switch (tableName) {
      case 'users':
        return query.insert(tableName, paramsObj);
      case 'tracks':
        const { username, name, album, artist, genre, rating, review } = paramsObj;
        const trackInputObj = { name };
        // check if album exists, if so get id, if not create it and get id
        const album_id = query.select('albums', { name: album });
        album_id ? trackInputObj['album_id'] = album_id : trackInputObj['album_id'] = query.insert('albums', { name: album })

        const artist_id = query.select('artists', { name: artist });
        artist_id ? trackInputObj['artist_id'] = artist_id : trackInputObj['artist_id'] = query.insert('artists', { name: artist })

        const genre_id = query.select('genres', { name: genre });
        genre_id ? trackInputObj['genre_id'] = genre_id : trackInputObj['genre_id'] = query.insert('genres', { name: genre })
    
        console.log(trackInputObj);
        // create new track and get tracks._id
        const track_id = query.insert('tracks', trackInputObj);

        // create new review for the track and get reviews._id
        const review_id = query.insert('reviews', { rating, review });

        // get user id
        const user_id = query.select('users', { username }).id;

        // create join table for user, track, and review
        query.insert('userTracks', { user_id, track_id, review_id })
        console.log('add track made it to the end');
        break;
    }
  };
  
  // for select, params should be an object with one entry for conditional mapping:
  //   {
  //     name: nameToMatch,
  //   }
  selectQuery = () => {
    return query.select(tableName, paramsObj);
  }


  updateQuery = () => {

  }

  switch (operation) {
    case 'INSERT':
      return insertQuery();
    case 'SELECT':
      return selectQuery();
    case 'UPDATE':
      return updateQuery();
  }
}

module.exports = parseQueryAndReturn;
