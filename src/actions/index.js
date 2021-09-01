import usersService from '../apis/users.api';

export const getUsers = () => async dispatch => {
    const response =  await usersService.get();
    dispatch({type: 'GET_USERS', payload: response.data});
}

export const createUser = (userDetails) => async dispatch => {
    const response = await usersService.post('', userDetails);
    dispatch({type: 'NEW_USER', payload: response.data});
}