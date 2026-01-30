const express = require('express')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const hpp = require('hpp')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')
const AppError = require('./utils/appError')

const globalErrorHandler = require('./controllers/errorController')
const userRoutes = require('./routes/userRoutes')
const machineryRoutes = require('./routes/machineryRoutes')

const app = express()

app.use(
    cors({
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://localhost:5173',
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    }),
)

app.use('/api/v1', express.static(path.join(process.cwd(), 'public')))

app.use(
    helmet({
        contentSecurityPolicy: false,
    }),
)

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!',
})
app.use('/', limiter)

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser())

app.get('/', (req, res, next) => {
    res.json({
        status: 'running',
        message: 'Hello World! Ekcors API is running!',
        time: new Date().toLocaleString('en-IN'),
    })
})

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/machinery', machineryRoutes)

app.all('/*catchAll', (req, res, next) => {
    next(new AppError(`Route '${req.originalUrl}' not found!`, 404))
})

app.use(globalErrorHandler)

module.exports = app