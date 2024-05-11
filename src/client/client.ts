import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create();

client.defaults.baseURL = 'https://openmarket.weniv.co.kr';

export default client;
