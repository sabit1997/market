import axios from 'axios';

const getToken = localStorage.getItem('token');

const instance = axios.create({
  baseURL: 'https://openmarket.weniv.co.kr/',
  headers: {
    Authorization: `JWT ${getToken}`,
  },
});

export default instance;
