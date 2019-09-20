const express = require('express');
const helmet = require('helmet');
const server = express();
const db = require('../users/user-model')

server.use(helmet());
server.use(express.json());

server.get('/test', (req,res) => {
    res.json("it's working")
})



server.get('/api/users', (req,res) => {
    db.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({message: "Fail to retrieve users"})
        })
} )

module.exports = server;











