const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const PORT = process.env.PORT || 3000;
const bcrypt = require('bcrypt');

/*
module.exports = new Sequelize('', '', '', {
  host: '',
  dialect:'mysql'
});
*/



// creates Connection locally
/*
const db = mysql.createConnection({
host :'localhost',
user :'root',
database : 'users',
password :''
});
*/


const db = mysql.createConnection({
host :'eu-cdbr-west-03.cleardb.net',
user :'bfc3a5cf268044',
database : 'heroku_cb8d33a19f2dd74',
password :'5ab9889d'
});


const app = express();

app.use(express.static(__dirname + "../../../front-end"));

//Connect
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('Mysql connected');
  });

  //Create DB
  /*
  app.get('/createdb', (req, res) => {
     let sql = 'CREATE DATABASE IF NOT EXISTS users';
     db.query(sql, (err, result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
     });
  });
  */
  //Create table
  app.get('/createprofilestable' , (req, res) => {
      let sql = "CREATE TABLE IF NOT EXISTS Profiles(id int AUTO_INCREMENT PRIMARY KEY, username VARCHAR(40) NOT NULL, password VARCHAR(80) NOT NULL, highscore INT )";
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Profles table created...');
      });
  });

  app.use(session({
  	secret: 'secret',
  	resave: true,
  	saveUninitialized: true
  }));
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());

  app.get('/', function(request, response) {
    let sql = "CREATE TABLE IF NOT EXISTS Profiles(id int AUTO_INCREMENT PRIMARY KEY, username VARCHAR(40) NOT NULL, password VARCHAR(80) NOT NULL, highscore INT )";
    db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
    });
	response.sendFile(path.join(__dirname + '../../../front-end/html/LOGIN.html'));
});

app.get('/register', function(request, response) {
response.sendFile(path.join(__dirname + '../../../front-end/html/REGISTER.html'));
});

app.get('/login', function(request, response) {
response.sendFile(path.join(__dirname + '../../../front-end/html/LOGIN.html'));
});


app.get('/play', function(request, response) {
response.sendFile(path.join(__dirname + '../../../front-end/html/PLAY.html'));
});

app.post('/add', function (request, response){
  var username = request.body.USERNAME;
  //var password = bcrypt.hash(request.body.PASSWORD, 10);
  var password = request.body.PASSWORD;
  var confirmpassword = request.body.CONFIRMPASSWORD;
  //if (password != confirmpassword) {
    //response.send('Please make sure password and confirm password are the same');
  //}else{

    db.query('INSERT INTO Profiles(username, password) VALUES(?,?)', [username, password], function(err) {
      if (err) {
        return console.log(err.message);
      } else {
      request.session.loggedin = true;
      console.log("User has been added");
      response.redirect('/menu');
      }
    });
  //}



	//	response.end();


});



app.post('/auth', function (request, response) {
	var username = request.body.USERNAME;
  var password = request.body.PASSWORD;

//	if ( bcrypt.compare(request.body.PASSWORD, password) )
if (username && password) {
		db.query('SELECT * FROM Profiles WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/menu');
			} else {
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/backmenu', function(request, response) {
		response.sendFile(path.join(__dirname + '../../../front-end/html/MAINMENU.html'));
});

app.get('/menu', function(request, response) {
	if (request.session.loggedin) {
		response.sendFile(path.join(__dirname + '../../../front-end/html/MAINMENU.html'));
	} else {
		response.send('Please login to view this page');
    response.sendFile(path.join(__dirname + '../../../front-end/html/LOGIN.html'));
	}
	//response.end();

});

app.listen(PORT);
