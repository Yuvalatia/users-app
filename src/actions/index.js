
import usersService from '../apis/users.api';

export const getUsers = () => async dispatch => {
    const response =  await usersService.get();
    dispatch({type: 'GET_USERS', payload: response.data});
}