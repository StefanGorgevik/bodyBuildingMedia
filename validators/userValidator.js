const createUser = {
    "first_name": "required|String", 
    "last_name": "required|String", 
    "birthday": "required|Date", 
    "level": "required|String", 
    "location": "required|String", 
    "email": "required|String", 
    "password": "required|String",
    "isWorkoutPlanCreated": "required|Boolean",
    "isDietCreated": "required|Boolean"
}

module.export = {
    createUser
}