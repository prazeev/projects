var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require("socket.io").listen(server);
var rn = require('random-number');



var users = [];
var connections = [];
var message = [];

server.listen(process.env.PORT || 8080);

console.log("Server running...");

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/chat.html');
});
io.sockets.on('connection', function(socket) {
	connections.push(socket);
	console.log("Connected: %s socket users",connections.length);

	// Send message
	socket.on("disconnect", function(data) {
		connections.splice(connections.indexOf(socket), 1);
		console.log("Disconnected: %s socket users",connections.length);
	});
	// send message
	socket.on("send message", function(data) {
		message.push(data);
		console.log(message);
		io.sockets.emit('new message', {msg: data});
	});
});