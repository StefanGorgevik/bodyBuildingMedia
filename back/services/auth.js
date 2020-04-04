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
const workoutPlanHandler = require('../handlers/workoutPlanHandler')

const cors = require('cors')
app.use(cors())

var jwt = require('express-jwt')
app.use(jwt({secret: config.getConfig('jwt').key})
    .unless(
        {path: ['/app/v1/register', '/app/v1/login']}
    )
)

app.get('/', (req,res) => {
    res.send("Hi there!")
})
app.post('/app/v1/register', usersHandler.registerUser)
app.post('/app/v1/login', usersHandler.loginUser)
app.post('/app/v1/register/workoutplans', workoutPlanHandler.saveWorkoutPlan)
app.get('/app/v1/register/workoutplans/:id', workoutPlanHandler.getWorkoutPlan)
app.post('/app/v1/register/diets', workoutPlanHandler.saveDiet)
app.get('/app/v1/register/diets/:id', workoutPlanHandler.getDiet)

app.get('/app/v1/users', usersHandler.getUsers)

app.listen(8080, (err) => {
    if(err) {
        console.log(err)
        console.log("Error")
        return;
    }
    return console.log("Server has started successfully on port 8080")
})