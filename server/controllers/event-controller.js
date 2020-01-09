const db = require('../db/connection');

const fileController = {};

fileController.addApplicant = (req, res, next) => {
  const { firstName, lastName, phone, email, position, experience, message } = req.body;
  // setting the default value to false on the server side to avoid potential tampering on the client side
  const on_team = 0;

  const queryText = 'INSERT INTO players (first_name, last_name, email, phone, position, years_experience, on_team, bio) VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
  const values = [firstName, lastName, email, phone, position, experience, on_team, message];

  db.query(queryText, values, (err, result) => {
    if (err) {
      console.log(`Error querying the DB: ${err}`);
      next(err);
    }
    res.locals.result = result;
    return next();
  });
};

fileController.getPlayers = (req, res, next) => {
  db.query('SELECT * FROM players WHERE on_team=1', (err, result) => {
    if (err) {
      console.log('Error retrieving players');
      next(err);
    }
    next(result);
  });
};

module.exports = fileController;
