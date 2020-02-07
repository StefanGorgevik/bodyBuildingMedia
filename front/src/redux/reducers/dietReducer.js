const initState = {meals: []}

export function dietReducer (state= initState, action) {
    console.log(state)
    switch(action.type) {
        case "ADD_DIET_MEALS" : {
                console.log(action.payload)
            return {
                ...state, meals:[...state.meals, action.payload]
            }
        }
        default: 
            return state;
        
    }
} 