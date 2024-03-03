//Web Sockets Intro Video: https://www.youtube.com/watch?v=FduLSXEHLng

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

/*
 * wb refers to the single connect to the server side
 * wss refers to the server instance of the WebSocket
 */

wss.on("connection", (ws) => {
  console.log("fuck you, new connection");

  ws.on("close", () => {
    console.log("Client has disconnected");
  });
});
