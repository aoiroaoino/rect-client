
var socket;
//var url = "ws://192.168.1.19:9000/world?name=aoino1";
var url = "ws://10.2.0.18:9000/world?name=aoino1";


// test position
var position = {
	"x": 1,
	"y": 1
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
	socket.onmessage = function(e) {
		var p = JSON.parse(e.data);
		position.x = p.x;
		position.y = p.y;
		console.log("--------");
		console.log(e.data);
		console.log(JSON.parse(e.data));
		console.log("--------");
		// console.log(p.y);
		drawRect(p.x, p.y)
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
	var json = '{"name":"aoino","vector":0}';
	socket.send(json);
	console.log(json);
}

function up() {
	vectorSend(0);
	console.log("press up key");
}
function down() {
	vectorSend(6);
	console.log("press down key");
	var json = '{"x":5, "y":7}';
	var obj = JSON.parse(json);
	console.log(json);
	console.log(obj);
	console.log(obj.x);
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
