const query = require('./query');



 // params should be an object like:
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
        // check for album, artist, genre
        // create if necessary, otherwise make links
    }
  };
  

  selectQuery = () => {

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
