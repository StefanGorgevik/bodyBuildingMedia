export const addDietMeals = (meals, clicked) => {
    return {
        type: "ADD_DIET_MEALS",
        payload: meals,
        clicked: clicked
    }
}