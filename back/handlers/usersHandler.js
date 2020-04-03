const usersModel = require('../models/usersModel')

const getUsers = (req, res) => {
    usersModel.getAllUsers()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

const registerUser = (req, res) => {
    var data = req.body
    console.log(data)
    usersModel.register(data)
    .then(() => {
        res.status(201).send("User registered")
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

module.exports = {
    getUsers,
    registerUser
}