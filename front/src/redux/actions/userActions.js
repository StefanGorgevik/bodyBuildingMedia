export const getAllUsers = (users) => {
    return {
        type: "GET_USERS",
        payload: users
    }
}