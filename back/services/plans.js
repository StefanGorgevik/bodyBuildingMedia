var express = require('express')
var app = express();

//making the connection with mongoose
const config = require('../config/index')
const DBConnection = require('../db/connection')
var c = config.getConfig("db")
DBConnection.initialize(c);

var bodyParser = require('body-parser')
app.use(bodyParser.json())

const planHandler = require('../handlers/planHandler')

const cors = require('cors')
app.use(cors())

var jwt = require('express-jwt');
app.use(                                                     
    jwt(
        { secret: config.getConfig('jwt').key }
    )
);

app.post('/app/v1/plans/workoutplans', planHandler.saveWorkoutPlan)
app.get('/app/v1/plans/workoutplans/:id', planHandler.getWorkoutPlan)
app.put('/app/v1/plans/workoutplans/:id', planHandler.updateWorkoutPlan)
app.post('/app/v1/plans/diets', planHandler.saveDiet)
app.get('/app/v1/plans/diets/:id', planHandler.getDiet)
app.put('/app/v1/plans/diets/:id', planHandler.updateDiet)

app.listen(8081, (err) => {
    if(err) {
        console.log(err)
        console.log("Error")
        return;
    }
    return console.log("Server has started successfully on port 8081")
})