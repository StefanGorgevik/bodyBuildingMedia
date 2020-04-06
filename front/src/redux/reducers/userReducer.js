const initState = {
    users:[],
    workoutPlan: {},
    selectedDiet: {},
    userSelected: {},
    userClicked: false,
    userLoggedIn: false,
    userRegistered: false,
    loggedUser: {},
    editInfoOpened: false,
    workoutPlanOpened: false,
    dietPlanOpened: false,
    personalInfoClicked: false,
    workoutPlanClicked: false,
    dietClicked: false
}

export function userReducer(state = initState, action) {
    switch (action.type) {
        //to get users on comp did mount in Users.js
        case "GET_USERS": {
            return {
                ...state, users: action.payload
            }
        }

        //authentication booleans
        case "IS_USER_LOGGED": {
            return {
                ...state, userLoggedIn: action.payload
            }
        }
        case "IS_USER_REGISTERED": {
            return {
                ...state, userRegistered: action.payload
            }
        }
        case "LOGGED_USER": {
            return {
                ...state, loggedUser: action.payload
            }
        }
        case "SELECTED_WORKOUT_PLAN": {
            return {
                ...state, workoutPlan: action.payload
            }
        }
        case "SELECTED_DIET": {
            return {
                ...state, selectedDiet: action.payload
            }
        }

        //user clicked on users scroll and get personal info
        case "USER_SELECTED": {
            return {
                ...state, userSelected: action.payload
            }
        }
        case "USER_CLICKED": {
            return {
                ...state, userClicked: action.payload
            }
        }


        //to open the option selected by user on header and write a plan
        case "OPEN_EDIT_INFO": {
            return {
                ...state, editInfoOpened: action.payload
            }
        }
        case "OPEN_WORKOUT_PLAN": {
            return {
                ...state, workoutPlanOpened: action.payload
            }
        }
        case "OPEN_DIET_PLAN": {
            return {
                ...state, dietPlanOpened: action.payload
            }
        }

        //userpage header for active class on header
        case "PERSONAL_INFO_CLICK": {
            return {
                ...state, personalInfoClicked: action.payload
            }
        }
        case "WORKOUT_PLAN_CLICK": {
            return {
                ...state, workoutPlanClicked: action.payload
            }
        }
        case "DIET_CLICK": {
            return {
                ...state, dietClicked: action.payload
            }
        }

        default:
            return state;

    }
}
