const workoutPlanModel = require('../models/workoutPlanModel')

const saveWorkoutPlan = (req,res) => {
    workoutPlanModel.saveWorkoutPlan(req.body)
    .then(() => {
        res.status(201).send("Workout plan created!")
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

const saveDiet = (req, res) => {
    workoutPlanModel.saveDiet(req.body)
    .then(() => {
        res.status(201).send("Diet created")
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

module.exports = {
    saveWorkoutPlan,
    saveDiet
}