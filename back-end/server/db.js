const express = require('express');
const mysql = require('mysql');





// creates Connection
const db = mysql.createConnection({
host :'localhost',
user :'root',
database : 'users'
password :'HyStErIa0312',
});
//Connect
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('Mysql connected');
  });

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
  app.get('/createprofilestable' , (req, res) => {
      let sql = 'CREATE TABLE profiles(id int AUTO_INCREMENT, username VARCHAR(40), password VARCHAR(30), highscore int,  PRIMARY KEY (id)';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Profles table created...');
      });
  });
