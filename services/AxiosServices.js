import axios from 'axios';
import AuthServices from './AuthServices';

let headers = {
    "Content-Type": 'application/json'
};

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL; 

if(AuthServices.isAuthenticated){
    headers.Authorization = `Bearer ${AuthServices.getAccessToken()}`
}

const axiosServices = axios.create({
    baseURL: BASE_API_URL,
    headers
});

export default axiosServices;
