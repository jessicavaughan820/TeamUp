const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers/event-controller.js');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/assets')))
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));
app.get('/build/bundle.js', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js')));
app.post('/add', controllers.addApplicant, (req, res) => res.status(200).redirect('/'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
