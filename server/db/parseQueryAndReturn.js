const query = require('./query');


function parseQueryAndReturn(operation, tableName, paramsObj) {
  let stmt = '';
  const resultsObj = {};
  stmtSlice2 = () => stmt = stmt.slice(0, -2);


  // for insert, params should be an object like: 
  //   {
  //     columnName1: value1,
  //     colName2: val2,  
  //   }
  insertQuery = () => {
    const valsArray = Object.values(paramsObj);
    stmt += `INSERT INTO ${tableName} (`;
    for (const colName of Object.keys(paramsObj)) stmt += `${colName}, `;
    stmtSlice2();
    stmt += ') VALUES (';
    for (const val of valsArray) stmt += '?, ';
    stmtSlice2();
    stmt += ');';
    
    console.log(stmt)
    return query(stmt, valsArray);
  };
  


  selectQuery = () => {

  }

  if (operation === 'INSERT' || operation === 'insert') insertQuery();



}
console.log('hello world')


module.exports = parseQueryAndReturn;