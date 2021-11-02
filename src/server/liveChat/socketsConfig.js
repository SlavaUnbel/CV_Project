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
      socket.on('join_room', (data) => {
        socket.join(data.room);
        socket.to(data.room).emit('receive_message', data)
      });

      socket.on('send_message', (data) => {
        socket.to(data.room).emit('receive_message', data)
      });

      socket.on('leave_room', (data) => {
        socket.leave(data.room);
        socket.to(data.room).emit('receive_message', data)
      });
    });

module.exports = socket;
