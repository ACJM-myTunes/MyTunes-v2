const { Pool } = require('pg');

const PG_URI =
  'postgres://tslsrkff:rwVY46XX83g1oFbEfEQ0kH6M8IkxZJaQ@isilo.db.elephantsql.com/tslsrkff';

const pool = new Pool({
  connectionString: PG_URI,
});

pool.connect(function (err) {
  if (err) throw err;
  console.log('Connected to PostgresDB');
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
