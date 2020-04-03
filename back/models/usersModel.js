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
        password: String
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

module.exports = {
    getAllUsers,
    register
}