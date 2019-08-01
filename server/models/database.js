const { Pool } = require('pg');

const pool = new Pool({
  user: 'lqbroond',
  host: 'raja.db.elephantsql.com',
  database: 'lqbroond',
  password: 'kc9TdbQKppralgwekjFfEcirbGf2a3dn',
  port: 5432,
});

//  create the table here
pool.query(CREATE TABLE IF NOT EXISTS people (
  id int PRIMARY KEY,
  firstName String,
  lastName String,
  phone String,
  email String,
  position String,
  experience String,
  introduction String,
), (err, res) => {
  console.log(err);
  pool.end();
});

module.exports = pool;
