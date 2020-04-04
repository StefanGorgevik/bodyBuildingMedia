const mongoose = require('mongoose')

var WorkoutPlan = mongoose.model(
    'plan', new mongoose.Schema({
            type: String,
            goal: String,
            intensity: String,
            userID: String,
            days: Object
        }, {collection: "workoutplans"})
)

const Diet = mongoose.model(
    'diet', new mongoose.Schema({
        dietGoals: String,
        dietDuration: String,
        mealsPerDay: Number,
        userID:String,
        meals: Object,
    },{collection: 'diets'}) 
)

const saveWorkoutPlan = (data) => {
    return new Promise((success, fail) => {
        var plan = new WorkoutPlan(data)
        plan.save(data, err => {
            if(err) {
                console.log(err)
                return fail;
            } else {
                return success(data)
            }
        })
    })
}

const saveDiet = (data) => {
    return new Promise((success, fail) => {
        var diet = new Diet(data)
        diet.save(data, err => {
            if(err) {
                return fail;
            } else {
                return success(data)
            }
        })
    })
}

const getWorkoutPlan = (userID) => {
    return new Promise((success, fail) => {
        WorkoutPlan.find({userID: userID}, (err, data) => {
            if(err) {
                return fail(err)
            } else {
                return success(data[0])
            }
        })
    })
}

const getDiet = (userID) => {
    return new Promise((success, fail) => {
        Diet.find({userID: userID}, (err, data) =>{
            if(err) {
                return fail(err)
            } return success(data[0])
        })
    })
}

module.exports = {
    saveWorkoutPlan,
    saveDiet,
    getWorkoutPlan,
    getDiet
}