import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`New client connected: ${socket.id}`);

  socket.on("emoji", (data) => {
    socket.broadcast.emit("new_emoji", data);
  });
});

server.listen(8000, () => {
  console.log("Server is up and running");
});