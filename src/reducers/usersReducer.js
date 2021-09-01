const usersReducer = (users=[], action) => {
    if(action.type === 'GET_USERS'){
        return action.payload;
    }
    if(action.type === 'ADD_USER'){
        return [...users, action.payload]
    }

    return users;
}

export default usersReducer;