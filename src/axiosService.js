import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const CURRENTUSERDETAILS = localStorage.getItem('persist:root');
const CURRENTUSEROBJECT = JSON.parse(CURRENTUSERDETAILS);
const CURRENTUSERTOKEN = JSON.parse(CURRENTUSEROBJECT?.user)?.currentUser?.token;
export const publicRequest = axios.create({
    baseURL:BASE_URL
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{Authorization:CURRENTUSERTOKEN}
});