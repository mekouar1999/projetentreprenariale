const express = require('express');
const dotenv = require('dotenv');
dotenv.config();    
const port=  process.env.PORT || 5000;
const ConnectDb = require('./config/ConnectDb');
ConnectDb();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is some data from the backend!' });
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});