const initState = {
    users: [
        {
            id: Math.random(),
            username: "Stef",
            first_name: "Stefan",
            last_name: "Gorgevik",
            birthday: "06-14-1994",
            level: "Mediocre"
        },
        {
            id: Math.random(),
            username: "Stef",
            first_name: "Stefan",
            last_name: "Gorgevik",
            birthday: "06-14-1994",
            level: "Mediocre"
        },
        {
            id: Math.random(),
            username: "Stef",
            first_name: "Stefan",
            last_name: "Gorgevik",
            birthday: "06-14-1994",
            level: "Mediocre"
        },
        {
            id: Math.random(),
            username: "Stef",
            first_name: "Stefan",
            last_name: "Gorgevik",
            birthday: "06-14-1994",
            level: "Mediocre"
        },
        {
            id: Math.random(),
            username: "Stef",
            first_name: "Stefan",
            last_name: "Gorgevik",
            birthday: "06-14-1994",
            level: "Mediocre"
        },{
            id: Math.random(),
            username: "Stef",
            first_name: "Stefan",
            last_name: "Gorgevik",
            birthday: "06-14-1994",
            level: "Mediocre"
        },{
            id: Math.random(),
            username: "Stef",
            first_name: "Stefan",
            last_name: "Gorgevik",
            birthday: "06-14-1994",
            level: "Mediocre"
        },{
            id: Math.random(),
            username: "Stef",
            first_name: "Stefan",
            last_name: "Gorgevik",
            birthday: "06-14-1994",
            level: "Mediocre"
        }
        ,{
            id: Math.random(),
            username: "Stef",
            first_name: "Stefan",
            last_name: "Gorgevik",
            birthday: "06-14-1994",
            level: "Mediocre"
        }
    ],
    personalInfos: [],
    workoutPlans: [],
    diets: []
}

export function userReducer (state = initState, action ) {
    switch(action.type) {
        case "GET_USERS":{
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
                ...state, personalInfos: [...state.personalInfos, newUser]
            }
        }
        case "SAVE_WORKOUT_PLAN": {
            return {
                ...state, workoutPlans: [...state.workoutPlans, action.payload]
            }
        }
        case "SAVE_DIET_PLAN": {
            return {
                ...state, diets: [...state.diets, action.payload]
            }
        }
        default: 
            return state;
        
    } 
} 