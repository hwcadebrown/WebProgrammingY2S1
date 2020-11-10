const express = require('express');
const mysql = require('mysql');

// creates Connection
const db = mysql.createConnection({
host :'localhost',
user :'root',
password :'HyStErIa0312',
database : 'users'
});
//Connect
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('Mysql connected');
  });

const app = express();


//Create DB
app.get('/createdb', () => {
   let sql = 'CREATE DATABASE users';
   db.query(sql, (err, result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Database created...');
   });
});
//Create table
app.get('/createprofilestable' , (res, res) => {
    let sql = 'CREATE TABLE profiles(id int AUTO_INCREMENT, username VARCHAR(40), password VARCHAR(30), PRIMARY KEY (id)';
    db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Posts table created...');
    });
});

app.listen('3000', () => {
  console.log('Server started with nodemon');
});
