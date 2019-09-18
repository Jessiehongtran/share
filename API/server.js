const express = require('express');
const helmet = require('helmet');
const server = express();


const UserRouter = require('../users/user-router')

server.use(helmet());
server.use(express.json());

server.get('/test', (req,res) => {
    res.json("it's working")
})

server.use('/api/users', UserRouter);

module.exports = server;











