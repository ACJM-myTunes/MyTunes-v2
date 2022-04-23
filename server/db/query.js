const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3(path.resolve('../myTunes.db'), { fileMustExist: true });

// function for querying database with passed in parameters;
function query(sqlStatement, params) {
  let dataObj;
  const statement = db.prepare(sqlStatement);

  retrieveData = () => {
    // add params to statement if any have been passed
    if (params) statement.bind(params);
    // execute search function for one finding one row
    statement.step();
    // return results as object
    dataObj = statement.getAsObject();
  }
  retrieveData();

  clearMem = () => {
    // memory allocated for statment
    statement.free();
    // memory allocated for params
    statement.freemem();
  }
  clearMem();

  return dataObj;
}

module.exports = {
  query
}