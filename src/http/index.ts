import axios, { AxiosRequestConfig } from 'axios';

const $api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
});

const handleRequest = (config: AxiosRequestConfig) => {
  // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
};

$api.interceptors.request.use(handleRequest);

export default $api;
