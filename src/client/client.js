import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'https://openmarket.weniv.co.kr';

export default client;
