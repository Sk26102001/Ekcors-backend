const { Server } = require('socket.io')
const { addUser, removeUserBySocket } = require('./user.socket')

// import { Server } from 'socket.io'
// import { addUser, removeUserBySocket } from './user.socket.js'

function setupSocket(server) {
    const io = new Server(server, {
        cors: {
            origin: process.env.FRONTEND_URL,
            methods: ['GET', 'POST'],
        },
    })

    io.on('connection', (socket) => {
        socket.on('register', (userId) => {
            addUser(userId, socket.id)
        })

        socket.on('disconnect', () => {
            removeUserBySocket(socket.id)
        })
    })

    return io
}

module.exports = { setupSocket };
