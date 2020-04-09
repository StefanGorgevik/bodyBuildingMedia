//to get users on comp did mount in Users.js
export const getAllUsers = (users) => {
    return {
        type: "GET_USERS",
        payload: users
    }
}


//authentication booleans
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



//actions for every click on user(it will make a request only to the clicked users)
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

//user clicked on users scroll and get personal info
export const userSelected = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    }
}
export const userClicked = (clicked) => {
    return {
        type: "USER_CLICKED",
        payload: clicked
    }
}

//to open the option selected by user on header and write a plan
export const openEditInfo = (bool) => {
    return {
        type: "OPEN_EDIT_INFO",
        payload: bool
    }
}
export const openWorkoutPlan = (bool) => {
    return {
        type: "OPEN_WORKOUT_PLAN",
        payload: bool
    }
}
export const openDietPlan = (bool) => {
    return {
        type: "OPEN_DIET_PLAN",
        payload: bool
    }
}
export const openUploadPhoto = (bool) => {
    return {
        type: "OPEN_UPLOAD_PHOTO",
        payload: bool
    }
}

//userpage header for active class on header

export const personalInfoClick = (bool) => {
    return {
        type: "PERSONAL_INFO_CLICK",
        payload: bool
    }
}
export const workoutPlanClick = (bool) => {
    return {
        type: "WORKOUT_PLAN_CLICK",
        payload: bool
    }
}
export const dietClick = (bool) => {
    return {
        type: "DIET_CLICK",
        payload: bool
    }
}


//photo url for logged user

export const uploadPhotoUrl = (url) => {
    return {
        type:"UPLOAD_PHOTO_URL", 
        payload: url
    }
}