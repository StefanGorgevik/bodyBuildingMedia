const workoutPlanModel = require('../models/workoutPlanModel')

const saveWorkoutPlan = (req,res) => {
    const newPlan = req.body
    workoutPlanModel.saveWorkoutPlan({...newPlan, userID: req.user.id})
    .then(() => {
        res.status(201).send("Workout plan created!")
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

const saveDiet = (req, res) => {
    const newDiet = req.body
    workoutPlanModel.saveDiet({...newDiet, userID: req.user.id})
    .then(() => {
        res.status(201).send("Diet created")
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

const getWorkoutPlan = (req, res) => {
    workoutPlanModel.getWorkoutPlan(req.params.id)
    .then((data) => {
        res.status(201).send(data)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

const getDiet = (req, res) => {
    workoutPlanModel.getDiet(req.params.id)
    .then((data) => {
        res.status(201).send(data)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

module.exports = {
    saveWorkoutPlan,
    saveDiet,
    getWorkoutPlan,
    getDiet
}