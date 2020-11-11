//Alexander Wickham
const socketio = require("socketio")
let app;
var tempPort
try {
  app = require("./app")
}
catch(error){
  console.log(error)
}
