//Alexander Wickham
//Adds the two modules required to run the server
const socketio = require("socket.io");
const express = require("express");
//Creates a port a variable to gain information from the data in order to complete transactions nessarcy
//Tempory until we get some sort of domain

let tempPort = process.env.PORT || 3000;
let app;
//Creates a socket that allows for information  to go back and through between the client and server at a regular rate as it is a multiplayer game
//Trys to find the app.js file otherwise it responds with an error
try {
  app = require("./app");
} catch (error) {
  console.log(error);
}
//Creates a server with a listen and a port
const server = app.listen(tempPort, () => {console.log("Listening on the port" + tempPort)})
//Makes it so the server can be use socket module properly
const io = socketio(server);
//Uses the main play file a requirement as it nessarcy to use it
const game_play = require("../Sockets/PLAY"); // NOTE: CADE CHANGED THIS
//genreates a class of Play in order to stream it.
let gameCurrent = new game_play.Play;
//Will stream the game to the user
let Run_Game = () =>{
  gameCurrent.trainUpdates()
  io.sockets.emit('game situation', gameCurrent);
}

//sets a base connection to the server that starts the game off.
io.on('connection', function(newPlayer) {
  //Adds a new player to the game, will change it so it incorperates the player name into train
  gameCurrent.addNewPlayer(newPlayer);
  //Runs the game for the user
  Run_Game()
  //Creates a bunch of listener that will activate once the user trigger an event to create them
  //If the user changes direction it
  newPlayer.on('changedirection', function(directionx, directiony) {
    gameCurrent.changedirection(newPlayer, directionx, directiony);
  })
//disconnect function that removes the player from the game and activates the remove player function so it removes it
  newPlayer.on('disconnect', function() {
    console.log('user has left the game')
    gameCurrent.removePlayer(newPlayer);
    Run_Game()
  })
})
//Sets an interval for a set period of time
setInterval(function() {
  Run_Game();
}, 200)
