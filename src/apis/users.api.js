import axios from 'axios';

const usersService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

export default usersService;
