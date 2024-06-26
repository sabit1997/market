import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://openmarket.weniv.co.kr/',
});

instance.interceptors.request.use(function (config) {
  const getToken = localStorage.getItem('token');
  config.headers['Authorization'] = `JWT ${getToken}`;
  return config;
});

export default instance;
