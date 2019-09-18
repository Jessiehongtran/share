const express = require('express');
const server = express();
module.exports = server;


server.use(express.json())

server.get('/test', (req,res) => {
    res.json("it's working")
})














