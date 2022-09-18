import axios from 'axios';
const BASE_URL = 'https://redstore-clothing.herokuapp.com/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZW1haWwiOiJwcml5YW5zaEBnbWFpbC5jb20iLCJ1c2VyaWQiOiI2MjczZjJkZmVmNGI3MWYzZGUwNWJkYjUiLCJ1c2VyYWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjU4NTA3MDMwLCJleHAiOjE2NTg1OTM0MzB9.nKPbkAvPE2gHGdeFRsnzCp3mmUUmIniYpbu2d9dPJYQ";
export const publicRequest = axios.create({
    baseURL:BASE_URL
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});