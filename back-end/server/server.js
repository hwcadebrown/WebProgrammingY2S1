//Alexander Wickham
//Adds the two modules required to run the server
const socketio = require("socket.io");
const express = require("express");
//Creates a port a variable to gain information from the data in order to complete transactions nessarcy

let tempPort = process.env.PORT || 3000;
let app;
//Creates a socket that allows for information  to go back and through between the client and server at a regular rate as it is a multiplayer game
const io = socketio();
//Trys to find the app.js file otherwise it responds with an error
try {
  app = require("./app")
}
catch(error){
  console.log(error)
}
//Creates a server with a listen and a port
const server = app.listen(port, () => console.log(`Listening on log ${port}...`));
//Makes it so the server can be use socket module properly
const io = socketio(server);
//Uses the main play file a requirement as it nessarcy to use it
const game_play = require("./Socket/PLAY")
//genreates a class of Play in order to stream it.
let gamestream = new game_play.Play;

//Will stream the game to the user
let Run_Game = () => {

}
