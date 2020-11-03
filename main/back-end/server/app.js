const express = require('express');
const mysql = require('mysql');

// creates Connection
const db = mysql.createConnection({
host :'localhost',
user :'root',
password :'',
database: 'users'



});

const app = express();

app.listen('3000', () => {
  console.log('Server started with nodemon')
});
