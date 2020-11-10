var mysql = require('mysql');

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

database.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE users", function (err, result) {
  if (err) throw err;
  console.log("Database created");
  });
});
