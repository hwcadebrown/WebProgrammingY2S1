const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');





// creates Connection
const db = mysql.createConnection({
host :'localhost',
user :'root',
database : 'users',
password :''
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
  app.get('/createdb', (req, res) => {
     let sql = 'CREATE DATABASE IF NOT EXISTS users';
     db.query(sql, (err, result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
     });
  });
  //Create table
  app.get('/createprofilestable' , (req, res) => {
      let sql = "CREATE TABLE IF NOT EXISTS profiles(id int AUTO_INCREMENT PRIMARY KEY, username VARCHAR(40), password VARCHAR(30), highscore INT )";
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
	response.sendFile(path.join(__dirname + '../../../front-end/html/LOGIN.html'));
});



app.post('/auth', function(request, response) {
	var username = request.body.USERNAME;
	var password = request.body.PASSWORD;
	if (username && password) {
		db.query('SELECT * FROM profiles WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
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



app.get('/menu', function(request, response) {
	if (request.session.loggedin) {
		response.sendFile(path.join(__dirname + '../../../front-end/html/MAINMENU.html'));
	} else {
		response.send('Please login to view this page!');
	}
	//response.end();
});

app.listen(3000);
