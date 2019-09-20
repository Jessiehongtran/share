const express = require('express');
const helmet = require('helmet');
const server = express();
const db = require('../users/user-model')
var cors = require('cors');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/test', (req,res) => { 
    res.json("it's working")
})

//GET users
server.get('/api/users', (req,res) => {
    db.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({message: "Fail to retrieve users"})
        })
})

//POST users for Login
server.post('/api/users/signup', (req,res)=> {
    const userData = req.body
    console.log(userData)
    db.addUser(userData)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//POST users for Login
// server.post('/api/users/login', (req,res)=> {
//     const userData = req.body
//     console.log(userData)
//     db.addUser(userData)
//         .then(user => {
//             res.status(201).json(user);
//         })
//         .catch(err => {
//             res.status(500).json(err)
//         })
// })


//POST user profile
server.post('/api/users/profile', (req,res) => {
    const userProfile = req.body
    db.createProfile(userProfile)
        .then(profile => {
            res.status(200).json(profile);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})



module.exports = server;











