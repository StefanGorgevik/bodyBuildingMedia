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

app.get('/', (req,res) => {
    res.send("Hi there!")
})
app.post('/app/v1/register', usersHandler.registerUser)

app.get('/app/v1/users', usersHandler.getUsers)

app.listen(8080, (err) => {
    if(err) {
        console.log(err)
        console.log("Error")
        return;
    }
    return console.log("Server has started successfully on port 8080")
})