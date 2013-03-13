
var socket;
var url = "ws://192.168.1.19:9000/world?name=aoino1";


// test position
var position = {
	x: 5000,
	y: 5000
};

var vector = {
	"key": 0
};

window.onload = function() {
	console.log("start loop...")
	setInterval(loop, 1000 / 60);
}

function loop() {
	drawRect(position.x / 10, position.y / 10);
}
	
function init(){
	socket = new WebSocket(url);
	socket.onopen = function(e) {
		alert("Connect " + url);
	};
	socket.onload = function(e) {
		position = eval(e.data);
		console.log(position);
	};
	socket.onclose = function(e) {
		alert("Close Socket");
	};
	socket.onerror = function(e) {
		alert("Socket Error...");
	};
}

function vectorSend(num) {
	vector.key = num; 
	socket.send(
		{"name":"aoino","vector" : 0}
	);
}

function up() {
	vectorSend(0);
	console.log("press up key");
}
function down() {
	vectorSend(6);
	console.log("press down key");
}
function right() {
	vectorSend(3);
	console.log("press right key");
}
function left() {
	vectorSend(9);
	console.log("press left key");
}

function drawRect(x, y) {
	var canvas = document.getElementById("rectcanvas");
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.fillRect(x, y, 10, 10);
	ctx.stroke();
}
