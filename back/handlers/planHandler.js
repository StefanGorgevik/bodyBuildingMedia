const planModel = require('../models/planModel')
const usersModel = require('../models/usersModel')

const saveWorkoutPlan = (req,res) => {
    const newPlan = req.body
    const user = req.user;
    usersModel.updateUser(user.id, {...user, isWorkoutPlanCreated: true})
    planModel.saveWorkoutPlan({...newPlan, userID: user.id})
    .then(() => {
        res.status(201).send("Workout plan created!")
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

const saveDiet = (req, res) => {
    const newDiet = req.body
    const user = req.user;
    usersModel.updateUser(user.id, {...user, isDietCreated: true})
    planModel.saveDiet({...newDiet, userID: user.id})
    .then(() => {
        res.status(201).send("Diet created")
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

const getWorkoutPlan = (req, res) => {
    planModel.getWorkoutPlan(req.params.id)
    .then((data) => {
        res.status(201).send(data)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

const getDiet = (req, res) => {
    planModel.getDiet(req.params.id)
    .then((data) => {
        console.log(data)
        res.status(201).send(data)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

const updateDiet = (req, res) => {
    planModel.updateDiet(req.params.id)
    .then((data) => {
        console.log(data)
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
    getDiet,
    updateDiet
}