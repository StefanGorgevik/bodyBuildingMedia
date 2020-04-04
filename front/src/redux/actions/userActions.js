export const getAllUsers = (users) => {
    return {
        type: "GET_USERS",
        payload: users
    }
}

export const isUserLogged = (bool) => {
    return {
        type: "IS_USER_LOGGED",
        payload: bool
    }
}

export const isUserRegistered = (bool) => {
    return {
        type: "IS_USER_REGISTERED",
        payload: bool
    }
}

export const registeredUser = (user) => {
    return {
        type: "REGISTERED_USER",
        payload: user
    }
}

export const savePersonalInfo = (info) => {
    return {
        type: "SAVE_PERSONAL_INFO",
        payload: info
    }
}

export const selectedWorkoutPlan = (plan) => {
    return {
        type: "SELECTED_WORKOUT_PLAN",
        payload: plan
    }
}
export const selectedDiet = (diet) => {
    return {
        type: "SELECTED_DIET",
        payload: diet
    }
}


export const userSelected = (user) => {
    return {
        type: "USER_SELECTED", 
        payload: user
    }
}
export const userClicked = ( clicked) => {
    return {
        type: "USER_CLICKED", 
        payload: clicked
    }
}

//to open header option and write a plan
export const openWorkoutPlan = ( plan) => {
    return {
        type: "OPEN_WORKOUT_PLAN", 
        payload: plan
    }
}
export const openDietPlan = ( bool) => {
    return {
        type: "OPEN_DIET_PLAN", 
        payload: bool
    }
}

//userpage header

export const personalInfoClick = ( bool) => {
    return {
        type: "PERSONAL_INFO_CLICK", 
        payload: bool
    }
}
export const workoutPlanClick = ( bool) => {
    return {
        type: "WORKOUT_PLAN_CLICK", 
        payload: bool
    }
}
export const dietClick = ( bool) => {
    return {
        type: "DIET_CLICK", 
        payload: bool
    }
}
