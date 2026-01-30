const mongoose = require('mongoose')
const dotenv = require('dotenv')
const http = require('http')
const app = require('./app')

const { setupSocket } = require('./socket/notification.socket')
const { setSocketInstance } = require('./socket/socket')

process.on('uncaughtException', (err) => {
    console.log('💥 UNCAUGHT EXCEPTION! Shutting down...')
    console.log(err.name, err.message)
    process.exit(1)
})

dotenv.config({ path: '.env' })

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD)

mongoose
    .connect(DB)
    .then(() => console.log('DB connection successful!'))
    .catch((err) => console.log('DB connection error:', err))

const port = process.env.PORT || 3000
const server = http.createServer(app)
const io = setupSocket(server)
setSocketInstance(io)
server.listen(port, () => console.log(`> server running on port ${port || 8000}`))

process.on('unhandledRejection', (err) => {
    console.log('💥 UNHANDLED REJECTION! Shutting down...')
    console.log(err.name, err.message)
    server.close(() => {
        process.exit(1)
    })
})
