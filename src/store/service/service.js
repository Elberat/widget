import axios from 'axios';

const http = axios.create({
    // baseURL: process.env.REACT_APP_API,
    baseURL: 'http://localhost:8000',
});

export default http;
