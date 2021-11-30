const { Server } = require("socket.io");
const http = require("http");
require("dotenv").config();

const socket = (app, port) =>
  new Server(http.createServer(app), {
    cors: {
      origin: process.env.CLIENT_API,
      methods: ["GET", "POST"],
    },
  })
    .listen(port)
    .on("connection", (socket) => {
      socket.on("join_room", (room) => {
        socket.join(room);
      });

      socket.on("choose_room", (room) => {
        socket.join(0);
        socket.to(0).emit("room_chosen", room);
      });

      socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
      });

      socket.on("leave_room", (room) => {
        socket.leave(room);
      });
    });

module.exports = socket;
