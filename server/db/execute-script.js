require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');

const sql = fs.readFileSync((process.argv[2]), 'utf-8');
const connectionString = process.env.uriString;
const pool = new Pool({
  connectionString,
});

pool.connect((err, client, done) => {
  if (err) {
    console.log('db connection error:', err);
    process.exit(1);
  }
  client.query(sql, (scriptErr) => {
    done();
    if (scriptErr) console.log('error in sql file', scriptErr);
  });
});

pool.end();