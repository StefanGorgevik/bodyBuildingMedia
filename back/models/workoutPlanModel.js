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
        snacksPerDay: Number,
        userID:String,
        meals: Object,
        snacks: Object
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

module.exports = {
    saveWorkoutPlan,
    saveDiet
}