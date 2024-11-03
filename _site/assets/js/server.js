const express = require('express');
const request = require('request');
const app = express();
const port = 3000; // Set the port to 3000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.get('/konachan', (req, res) => {
  const apiUrl = 'https://konachan.net/post.json?limit=100';
  request(apiUrl).pipe(res);
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});