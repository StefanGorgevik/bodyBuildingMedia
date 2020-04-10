const usersModel = require('../models/usersModel');
var validator = require('node-input-validator');
var userValidator = require('../validators/userValidator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../config/index');

const getUsers = (req, res) => {
    usersModel.getAllUsers()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
}

const getOneUser = (req, res) => {
    usersModel.getOneUser(req.params.id)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
}
const getUserByName = (req, res) => {
    usersModel.getUserByName(req.params.first_name)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
}

const updateUser = (req, res) => {
    usersModel.updateUser(req.params.id, req.body)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
}

const registerUser = (req, res) => {
    var newUser = req.body;
    var validate = new validator.Validator(newUser, userValidator.createUser);
    validate.check()
    .then(matched => {
        if(matched) {
            bcrypt.genSalt(10, function(err, salt) {
                if(err) {
                    throw new Error(err);
                    return;
                } 
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) {
                        throw new Error(err);
                        return;
                    } return usersModel.register({...newUser, password: hash, isWorkoutPlanCreated: false, isDietCreated: false, isPhotoUploaded: false})
                })
            })
        } else {
            throw new Error("Validation failed");
        }
    })
    .then(() => {
        res.status(201).send("User registered!")
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

const loginUser = (req, res) => {
    var user = req.body
    usersModel.login(user.email)
    .then((data) => {
        bcrypt.compare(user.password, data.password, function(err, result) {
            if(err) {
                return res.status(500).send("Could not compare passwords")
            }
            if(result) {
                var tokenData = {
                    id: data._id,
                    full_name: `${data.first_name} ${data.last_name}`,
                    email: data.email,
                    isPhotoUploaded: data.isPhotoUploaded
                }
                var token = jwt.sign(tokenData, config.getConfig('jwt').key)
                return res.status(200).send({jwt: token, id: data._id, full_name:tokenData.full_name, email: data.email, 
                    userid: data._id,
                    isWorkoutPlanCreated: data.isWorkoutPlanCreated,
                    isDietCreated: data.isDietCreated,
                    isPhotoUploaded: data.isPhotoUploaded
                })
            }
            return res.status(400).send('Not found!')
        })
    })
    .catch(err => {
        return res.status(500).send("Could not found user!");
    })
}

module.exports = {
    getUsers,
    registerUser,
    loginUser,
    getOneUser,
    updateUser,
    getUserByName
}