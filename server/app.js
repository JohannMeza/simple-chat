const http = require('http');
const express = require('express');
const app = express();

const path = require('path');
const cors = require('cors');
const morgan = require('morgan')

const indexRouter = require('./routes/index');

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
require('./socket.server')(io);

// --- Settings
app.set('port', process.env.PORT || 3000)

// --- Middleware
app.use(express.static(path.join(__dirname, '..', '/public')))
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// --- routes
app.use('/api/message', indexRouter)

module.exports = { server, app }


