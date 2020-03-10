import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.30.10.176:9157'
});

export default api;