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
        type: "SAVE_WORKOUT_PLAN",
        payload: diet
    }
}