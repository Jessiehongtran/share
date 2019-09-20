const express = require('express');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const helmet = require('helmet');
const server = express();
const db = require('../users/user-model')
const secrets = require('../secrets/secret')
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
    const userData = req.body;
    console.log(userData)
    const hash = bcrypt.hashSync(userData.password, 12)
    userData.password = hash;
   
    db.addUser(userData)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//POST users for Login
server.post('/api/users/login', (req,res)=> {
    let {username, password} = req.body;

    db.findUser({username})
        .first()
        .then(user => {
            console.log(user)
            if (user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}`, token 
                })
            } else {
                res.status(401).json({message: 'Invalid credentials'})
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

function generateToken(user){
    const payload = {
        username: user.username
    };
    const secret = secrets.jwtSecret
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secret, options)
}


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











