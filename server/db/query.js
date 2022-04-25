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

}

update = (tableName, paramsObj) => {
  
}


module.exports = query = {
  insert,
  select,
  update
}