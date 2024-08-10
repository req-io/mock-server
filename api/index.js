const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");


const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to log requests and responses
app.use(morgan('dev'));

// Middleware to parse JSON data from POST requests
app.use(bodyParser.json());

// Static JSON data to be returned for the GET request
const staticData = {
  message: 'This is a static JSON response for the GET request.',
};

// GET request endpoint
app.get('/api/mock', (req, res) => {
  console.log('headers', req.headers)
  res.json(staticData);
});

// GET request endpoint
app.get('/api/echo/status/:statuscode', (req, res) => {
  console.log('headers', req.headers)
  res.status(+req.params.statuscode).json(staticData);
});

// POST request endpoint
app.post('/api/mock', (req, res) => {
  console.log('headers', req.headers)
  console.log('body', req.body)
  // Echo back the data received in the POST request
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
