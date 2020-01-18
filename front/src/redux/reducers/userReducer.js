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
        },
    ]
}

export function userReducer (state = initState, action ) {
    switch(action.type) {
        case "GET_USERS":{
            return {
                ...state, users: action.payload
            }
        }
        default: 
            return state;
        
    } 
} 