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

export const loggedUser = (user) => {
    return {
        type: "LOGGED_USER",
        payload: user
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
    console.log(info)
    return {
        type: "SAVE_PERSONAL_INFO",
        payload: info
    }
}

export const saveWorkoutPlan = (plan) => {
    return {
        type: "SAVE_WORKOUT_PLAN",
        payload: plan
    }
}

export const saveDietPlan = (diet) => {
    return {
        type: "SAVE_DIET_PLAN",
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