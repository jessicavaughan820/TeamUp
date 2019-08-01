const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers/event-controller.js');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',  (req, res) => res.status(200).send('It\'s alive!'));
app.post('/add', controllers.addApplicant, (req, res) => res.status(200).send(res.locals.playerdata));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
