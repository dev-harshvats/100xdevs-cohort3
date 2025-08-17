import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event listener for when a client connects
wss.on('connection', function(socket){
    console.log('Client connected');
    socket.send("hello from server");

    socket.on('message', (e) => {
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })
});
