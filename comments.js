// create web server
const express = require('express');
const app = express();

// middleware
app.use(express.json());

// data
let comments = [
  { id: 1, comment: 'hello' },
  { id: 2, comment: 'world' },
  { id: 3, comment: 'foo' },
  { id: 4, comment: 'bar' }
];

// get all comments
app.get('/comments', (req, res) => {
  res.send(comments)