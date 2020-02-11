export const getAllUsers = (users) => {
    return {
        type: "GET_USERS",
        payload: users
    }
}

export const savePersonalInfo = (info) => {
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

export const saveUser = (user) => {
    return {
        type: "SAVE_USER",
        payload: user
    }
}

export const saveClicked = () => {
    return {
        type: "SAVE_CLICKED"
    }
}
export const editClicked = () => {
    return {
        type: "EDIT_CLICKED"
    }
}
export const registerClicked = () => {
    return {
        type: "REGISTER_CLICKED"
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