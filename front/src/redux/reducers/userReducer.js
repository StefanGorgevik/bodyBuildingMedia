const initState = {
    users: [ {
            personalInfo: {
                firstName: "dada",
                birthday: "2000-01-01",
                lastName: "dadad",
                level: "dadada",
                location: "dada",
                email: "dada",
                password: "dada",
                id: 581
            },
            workoutPlan: {
                type: "dada",
                goal: "dadad",
                intensity: "dada",
                day1: "dadad",
                day2: "dadad",
                day3: "dadad",
                day4: "true",
                day5: "daa",
                day6: "dada",
                day7: "dadad",
            },
            diet: {
                dietGoals: "dadad",
                dietIntensity: "dadad",
                meals: {
                    meal1: "dadada",
                    meal2: "dadada"
                },
                snacks: {
                    snack1: "dadada",
                    snack2: "dadada"
                }
            }
        }
    ],
    personalInfo: {},
    workoutPlan: {},
    diet: {},
    saveClicked: 0
}

export function userReducer(state = initState, action) {
    console.log(state.saveClicked)
    switch (action.type) {
        case "GET_USERS": {
            return {
                ...state, users: action.payload
            }
        }
        case "SAVE_PERSONAL_INFO": {
            console.log(action.payload);
            const newUser = action.payload;
            newUser.id = Math.floor(Math.random() * 1000)
            console.log(newUser)
            return {
                ...state, personalInfo: newUser
            }
        }
        case "SAVE_WORKOUT_PLAN": {
            console.log(action.payload)
            return {
                ...state, workoutPlan: action.payload
            }
        }
        case "SAVE_DIET_PLAN": {
            console.log(action.payload)
            return {
                ...state, diet: action.payload
            }
        }
        case "SAVE_USER": {
            console.log(action.payload);
            return {
                ...state, users: [...state.users, action.payload]
            }
        }
        case "SAVE_CLICKED": {
            return {
                ...state, saveClicked: state.saveClicked + 1
            }
        }
        case "EDIT_CLICKED": {
            return {
                ...state, saveClicked: state.saveClicked - 1
            }
        }
        case "REGISTER_CLICKED": {
            return {
                ...state, saveClicked: 0
            }
        }
        default:
            return state;

    }
}

// users: [
//     {
//         id: Math.random(),
//         first_name: "Stefan",
//         last_name: "Gorgevik",
//         birthday: "06-14-1994",
//         level: "Mediocre"
//     },
//     {
//         id: Math.random(),
//         first_name: "Stefan",
//         last_name: "Gorgevik",
//         birthday: "06-14-1994",
//         level: "Mediocre"
//     },
//     {
//         id: Math.random(),
//         first_name: "Stefan",
//         last_name: "Gorgevik",
//         birthday: "06-14-1994",
//         level: "Mediocre"
//     },
//     {
//         id: Math.random(),
//         first_name: "Stefan",
//         last_name: "Gorgevik",
//         birthday: "06-14-1994",
//         level: "Mediocre"
//     },
//     {
//         id: Math.random(),
//         first_name: "Stefan",
//         last_name: "Gorgevik",
//         birthday: "06-14-1994",
//         level: "Mediocre"
//     },{
//         id: Math.random(),
//         first_name: "Stefan",
//         last_name: "Gorgevik",
//         birthday: "06-14-1994",
//         level: "Mediocre"
//     },{
//         id: Math.random(),
//         first_name: "Stefan",
//         last_name: "Gorgevik",
//         birthday: "06-14-1994",
//         level: "Mediocre"
//     },{
//         id: Math.random(),
//         first_name: "Stefan",
//         last_name: "Gorgevik",
//         birthday: "06-14-1994",
//         level: "Mediocre"
//     }
//     ,{
//         id: Math.random(),
//         first_name: "Stefan",
//         last_name: "Gorgevik",
//         birthday: "06-14-1994",
//         level: "Mediocre"
//     }
// ],