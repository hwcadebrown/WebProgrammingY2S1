//Andrew McBain
//initialises express module
const express = require('express');
//initialises path module
const path = require("path");
//initialises bodyParser module
const bodyParser = require('body-parser');
//initialises cors module
const cors = require('cors');
//initialises mysql module
const mysql = require('mysql');
//initialises express-session module
const session = require('express-session');
// initialises sequelise module
const Sequelize = require('sequelize');
// creates a port to run game from or uses 4000 for localhost
const PORT = process.env.PORT || 4000;
// initialises bcrypt module
const bcrypt = require('bcrypt');
//creates an instance of express
const app = express();
//allows app to use both cors and bodyParser modules
app.use(cors());

app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({extended: false}));

//const db = require('./db.js');

//gives access to front-end folder, allows use of all css and js files stored there
app.use(express.static(__dirname + "../../../front-end"));

// creates Connection locally
/*
const db = mysql.createConnection({
host :'localhost',
user :'root',
database : 'users',
password :''
});
*/

// creates connection to Heroku database
const db = mysql.createConnection({
host :'eu-cdbr-west-03.cleardb.net',
user :'bfc3a5cf268044',
database : 'heroku_cb8d33a19f2dd74',
password :'5ab9889d'
});


//Connect and log the database connecting
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
  //Create Profiles table locally
  app.get('/createprofilestable' , (req, res) => {
      let sql = "CREATE TABLE IF NOT EXISTS Profiles(id int AUTO_INCREMENT PRIMARY KEY, username VARCHAR(40) NOT NULL, password VARCHAR(80) NOT NULL, highscore INT )";
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Profles table created...');
      });
  });
//creates a 'session'
  app.use(session({
  	secret: 'secret',
  	resave: true,
  	saveUninitialized: true
  }));
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());
// / route retrieves first page (login page)
  app.get('/', function(request, response) {
    //creates a table if it doesnt exist in the db as the page is accessed
    let sql = "CREATE TABLE IF NOT EXISTS Profiles(id int AUTO_INCREMENT PRIMARY KEY, username VARCHAR(40) NOT NULL, password VARCHAR(80) NOT NULL, highscore INT )";
    db.query(sql, (err, result) => {
      if(err) {

      console.log(result);
      }
    });
  //sends login page
response.sendFile(path.join(__dirname + '../../../front-end/html/LOGIN.html'));
});
// route that retrieves register page
app.get('/register', function(request, response) {
response.sendFile(path.join(__dirname + '../../../front-end/html/REGISTER.html'));
});
//route that retrieves login page
app.get('/login', function(request, response) {
response.sendFile(path.join(__dirname + '../../../front-end/html/LOGIN.html'));
});

//route that retrieves play page
app.get('/play', function(request, response) {
response.sendFile(path.join(__dirname + '../../../front-end/html/PLAY.html'));
});

//route that adds user to the db and redirects to main menu
app.post('/add', function (request, response){
  var username = request.body.USERNAME;
  // attempt to hash password with bcrypt but had to comment out to allow site to work
  //var password = bcrypt.hash(request.body.PASSWORD, 10);
  var password = request.body.PASSWORD;
  var confirmpassword = request.body.CONFIRMPASSWORD;
  //attempt to check password against confirmpassword, had to coment out cause it was breaking the site
  //if (password != confirmpassword) {
    //response.send('Please make sure password and confirm password are the same');
  //}else{
//inserts record into table
  db.query('INSERT INTO Profiles(username, password) VALUES(?,?)', [username, password], function(err) {
      if (err) {
        return console.log(err.message);
      } else {
      //indicates user is logged on and redirects to menu route
        request.session.loggedin = true;
        console.log("User has been added");
        response.redirect('/menu');
      }
  });
  //}



	//	response.end();


});


// accesses record in database to login user
app.post('/auth', function (request, response) {
	var username = request.body.USERNAME;
  var password = request.body.PASSWORD;
// if clause was going to be used to compare hashed password with user input for security but was breaking game
//	if ( bcrypt.compare(request.body.PASSWORD, password) )
//if the username and password matches what is in database then user gets logged in and redirected to menu route
if (username && password) {
		db.query('SELECT * FROM Profiles WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/menu');
			} else {
        //if it doesnt match, they are displayed this message
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
//returns user to menu from the play page upon death
app.get('/backmenu', function(request, response) {
		response.sendFile(path.join(__dirname + '../../../front-end/html/MAINMENU.html'));
});
//route that takes user to main menu
app.get('/menu', function(request, response) {
  //route only works if user is logged in
	if (request.session.loggedin) {
		response.sendFile(path.join(__dirname + '../../../front-end/html/MAINMENU.html'));
	} else {
		response.send('Please login to view this page');
    response.sendFile(path.join(__dirname + '../../../front-end/html/LOGIN.html'));
	}
	//response.end();

});



//listens for port given by heroku or for local port given
app.listen(PORT);


//exproted this as an instance of app for running through server
module.exports = app;
