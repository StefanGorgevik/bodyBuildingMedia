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
    diet: {},
    userSelected: {},
    userClicked: false,
    userLoggedIn: false,
    loggedUser: {},
    userRegistered: false,
    registeredUser: {}
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
        case "LOGGED_USER": {
            console.log(action.payload)
            return {
                ...state, loggedUser: action.payload
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
        case "SAVE_WORKOUT_PLAN": {
            return {
                ...state, workoutPlan: action.payload
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
        default:
            return state;

    }
}

// {
//     personalInfo: {
//         firstName: "Stefan",
//         birthday: "2000-01-01",
//         lastName: "Gorgevik",
//         level: "Intermediate",
//         location: "Skopje",
//         email: "stefangg@hotmail.com",
//         password: "2222",
//         id: 581
//     },
//     workoutPlan: {
//         type: "dada",
//         goal: "dadad",
//         intensity: "dada",
//         days: [{
//             day1: "dadad",
//             day2: "dadad",
//             day3: "dadad",
//             day4: "true",
//             day5: "daa",
//             day6: "dada",
//             day7: "dadad"
//         }]
//     },
//     diet: {
//         dietGoals: "dadad",
//         dietIntensity: "dadad",
//         meals: {
//             meal1: "dadada",
//             meal2: "dadada"
//         },
//         snacks: {
//             snack1: "dadada",
//             snack2: "dadada"
//         }
//     }
// }