const express = require('express');
const mysql = require('mysql');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');


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

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));


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

app.use(express.static("front-end"));

app.get("/", isLoggedIn, (req, res) => {
  console.log("login page loaded")

  res.sendFile(path.join(_dirname, "/../front-end/html/LOGIN.html"))
});

app.get("/", isLoggedIn, (req, res) => {
  console.log("main menu page loaded")

  res.sendFile(path.join(_dirname, "/../front-end/html/MAINMENU.html"))
});

app.get("/", isLoggedIn, (req, res) => {
  console.log("game page loaded")

  res.sendFile(path.join(_dirname, "/../front-end/html/PLAY.html"))
});



app.listen('3000', () => {
  console.log('Server started with nodemon');
});
