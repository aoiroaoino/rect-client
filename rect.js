
var socket;
var url = "ws://localhost:9000/socket";

window.onload = function() {
	setInterval(loop, 1000 / 60);
}

var position = {
	"x": 5000,
	"y": 5000
}
	
function init(){
	socket = new WebSocket(url);
	socket.onopen = function(e) {
		alert("Connect " + url);
	};
	socket.onload = function(e) {
		position = eval(e.data);
	};
	socket.onclose = function(e) {
		alert("Close Socket");
	};
	socket.onerror = function(e) {
		alert("Socket Error...");
	};
}

function loop() {
	drawRect(position.x / 10, position.y / 10);
}

function drawRect(x, y) {
	var canvas = document.getElementById("rectcanvas");
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.fillRect(x, y, 10, 10);
	ctx.stroke();
}

