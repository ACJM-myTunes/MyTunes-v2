const query = require('./query');

function parseQueryAndReturn(operation, table, paramsObj) {
  if (operation === 'INSERT' || operation === 'insert') insertQuery();
  let stmt = '';
  const resultsObj = {};
  stmtSlice = () => (stmt = stmt.slice(0, -2));

  // for insert, params should be an object like:
  //   {
  //     columnName1: value1,
  //     colName2: val2,
  //   }
  insertQuery = () => {
    const valsArray = Object.values(paramsObj);
    stmt += `INSERT INTO ${table} (`;
    for (const colName of Object.keys(paramsObj)) stmt += `${colName}, `;
    stmtSlice();
    stmt += ') VALUES (';
    for (const val of valsArray) stmt += '?, ';
    stmtSlice();
    stmt += ');';

    return query(stmt, valsArray);
  };

  selectQuery = () => {};
}
console.log('hello world');

module.exports = parseQueryAndReturn;
