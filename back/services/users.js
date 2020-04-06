var express = require('express')
var app = express();

//making the connection with mongoose
const config = require('../config/index')
const DBConnection = require('../db/connection')
var c = config.getConfig("db")
DBConnection.initialize(c);

var bodyParser = require('body-parser')
app.use(bodyParser.json())

const usersHandler = require('../handlers/usersHandler')

const cors = require('cors')
app.use(cors())

var jwt = require('express-jwt')
app.use(
    jwt(
        { secret: config.getConfig('jwt').key }
    )
)

app.get('/app/v1/users/', usersHandler.getUsers)
app.get('/app/v1/users/:id', usersHandler.getOneUser)
app.put('/app/v1/users/:id', usersHandler.updateUser)

app.listen(8082, (err) => {
    if (err) {
        console.log(err)
        console.log("Error")
        return;
    }
    return console.log("Server has started successfully on port 8082")
})