const db = require('../models/database');

const fileController = {};

fileController.addApplicant = (req, res, next) => {
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { phone } = req.body;
  const { email } = req.body;
  const { position } = req.body;
  const { experience } = req.body;
  const { introduction } = res.body;

  const queryText = 'INSERT INTO people (firstName, lastName, phone, email, position, experience, introduction) VALUES($1, $2, $3, $4, $5, $6, $7)';
  const values = [firstName, lastName, phone, email, position, experience, introduction];

  db.connect.query(queryText, values, (err, result) => {
    if (err) {
      console.log (`Error querying the DB: ${err}`);
    }
  })
}

fileController.getPlayers = (req, res, next) => {
  db.connect.query('SELECT * FROM players', (err, result) => {
    if (err) {
      console.log ('Error retrieving players');
    }
  });
};

module.exports = fileController;
