//Andrew McBain
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

const db = require('./db.js');


app.use(express.static(__dirname + "../../../front-end"));

//app.get("/", isLoggedIn, (req, res) => {
//  console.log("login page loaded")

  //res.sendFile(path.join(_dirname, "/../front-end/html/LOGIN.html"))
//});

//app.get("/", isLoggedIn, (req, res) => {
  //console.log("main menu page loaded")

//  res.sendFile(path.join(_dirname, "/../front-end/html/MAINMENU.html"))
//});

//app.get("/", isLoggedIn, (req, res) => {
  //console.log("game page loaded")

  //res.sendFile(path.join(_dirname, "/../front-end/html/PLAY.html"))
//});



//app.listen('3000', () => {
  //console.log('Server started with nodemon');
//});

//module.exports = app;
