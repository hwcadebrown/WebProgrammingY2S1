//Alexander Wickham
const socketio = require("socketio");
const express = require("express");
let tempPort = process.env.PORT || 3000;
let app;
try {
  app = require("./app")
}
catch(error){
  console.log(error)
}
const server = app.listen(port, () => console.log(`Listening on log ${port}...`));
