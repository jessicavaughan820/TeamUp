const db = require('../models/database');

const fileController = {};

fileController.addApplicant = (req, res, next) => {
  const { firstName, lastName, phone, email, position, experience, introduction } = req.body;
  console.log(req.body);

  const queryText = 'INSERT INTO people (firstName, lastName, phone, email, position, experience, introduction) VALUES($1, $2, $3, $4, $5, $6, $7)';
  const values = [firstName, lastName, phone, email, position, experience, introduction];

  db.query(queryText, values, (err, result) => {
    if (err) {
      console.log(`Error querying the DB: ${err}`);
    }
    res.locals.result = result;
    return next();
  });
};

fileController.getPlayers = (req, res, next) => {
  db.connect.query('SELECT * FROM players', (err, result) => {
    if (err) {
      console.log ('Error retrieving players');
    }
  });
};

module.exports = fileController;
