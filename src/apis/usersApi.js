import axios from "axios";

const usersApi = axios.create({
    baseURL: 'http://localhost:8080/users'
});

usersApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token'),
    }
    return config;
});

export default usersApi;