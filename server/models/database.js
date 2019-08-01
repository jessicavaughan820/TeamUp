const { Pool } = require('pg');

const pool = new Pool({
  user: 'lqbroond',
  host: 'raja.db.elephantsql.com',
  database: 'lqbroond',
  password: 'kc9TdbQKppralgwekjFfEcirbGf2a3dn',
  port: 5432,
});

// const pool = new Pool('postgres://lqbroond:kc9TdbQKppralgwekjFfEcirbGf2a3dn@raja.db.elephantsql.com:5432/lqbroond');
const model = 'CREATE TABLE IF NOT EXISTS people (id serial PRIMARY KEY, firstName varchar(75), lastName varchar(75), phone varchar(75), email varchar(75), position varchar(75), experience varchar(75), introduction varchar(75));';

//  create the table here
pool.query(model, (err, res) => {
  console.log(err);
  // pool.end();
});

module.exports = pool;
