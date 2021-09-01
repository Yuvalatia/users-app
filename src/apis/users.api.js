import axios from 'axios';

const usersService = axios.create({
    baseURL: 'http://localhost:5000/users'
});

export default usersService;
