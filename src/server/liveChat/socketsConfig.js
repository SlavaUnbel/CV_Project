const { Server } = require('socket.io');
const http = require('http');

const socket = (app, port) =>
  new Server(http.createServer(app), {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  })
    .listen(port)
    .on('connection', (socket) => {
      console.log(`User connected ${socket.id}`);

      socket.on('join_room', (room) => {
        socket.join(room);
        console.log(`User with ID: ${socket.id} joined room: ${room}`);
      });

      socket.on('disconnect', () => {
        console.log(`User disconnected ${socket.id}`);
      });
    });

module.exports = socket;
