const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const controllers = require('./controllers/event-controller.js');

const app = express();

const PORT = 3000;

// parse the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// parse cookies
app.use(cookieParser());

// serve static files
app.use('/assets/', express.static(path.resolve(__dirname, '../client/assets/')));
app.use('/build/', express.static(path.resolve(__dirname, '../build/')));

// base route
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));

// route to add registrants
app.post('/add', controllers.addApplicant, (req, res) => res.status(200).redirect('/'));

// catchall route
app.use('*', (req, res) => {
  res.status(404).send('Path not found');
});

// global error handler
app.use((err, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware handler',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
