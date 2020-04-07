const mongoose = require('mongoose')

const User = mongoose.model(
    "user", 
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        birthday: Date,
        level: String,
        location: String,
        email: String,
        password: String,
        isWorkoutPlanCreated: Boolean,
        isDietCreated: Boolean,
        photoUploaded: Boolean
    })
)

const getAllUsers = () => {
    return new Promise((success, fail) => {
       User.find({}, (err, data) => {
           if(err) {
               return fail;
           }
           return success(data)
       })
    })
}

const register = (data) => {
    return new Promise((success, fail) => {
        var user = new User(data)
        user.save(data, err => {
            if(err) {
                return fail;
            } else {
                return success(data)
            }
        })
    })
}

const login = (email) => {
    return new Promise((success,fail) => {
        User.find({email: email}, (err,data) => {
            if(err) {
                return fail(err);
            }
            return success(data[0])
        })
    })
}

const updateUser =(id,data) => {
    return new Promise((success, fail) => {
        User.updateOne({_id: id}, data, err => {
            if(err) {
                return fail(err)
            } 
            return success(data)
        })
    })
} 
const getOneUser =(id) => {
    return new Promise((success, fail) => {
        User.find({_id: id}, (err,data) => {
            if(err) {
                return fail(err)
            } 
            return success(data)
        })
    })
} 

module.exports = {
    getAllUsers,
    register,
    login,
    updateUser,
    getOneUser
}