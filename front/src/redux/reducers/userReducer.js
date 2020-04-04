const initState = {
    users: [],
    personalInfo: {
        first_name: '',
        last_name:'',
        email: '',
        password: '',
        level: '',
        location: '',
        birthday: ''
    },
    workoutPlan: {},
    selectedDiet: {},
    userSelected: {},
    userClicked: false,
    userLoggedIn: false,
    userRegistered: false,
    registeredUser: {},
    workoutPlanOpened: false,
    dietPlanOpened: false,
    personalInfoClicked: false,
    workoutPlanClicked: false,
    dietClicked: false
}

export function userReducer(state = initState, action) {
    switch (action.type) {
        case "GET_USERS": {
            return {
                ...state, users: action.payload
            }
        }
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
        case "REGISTERED_USER": {
            return {
                ...state, userRegistered: action.payload
            }
        }
        case "SAVE_PERSONAL_INFO": {
            return {
                ...state, personalInfo: action.payload
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
        case "SAVE_DIET_PLAN": {
            return {
                ...state, diet: action.payload
            }
        }
        case "SAVE_USER": {
            return {
                ...state, users: [...state.users, action.payload]
            }
        }
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
