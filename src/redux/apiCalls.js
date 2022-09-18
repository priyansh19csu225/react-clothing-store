import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import {publicRequest } from "../axiosService";
export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
    const res = await publicRequest.post('/login',user);
    dispatch(loginSuccess(res.data));
    }catch(error){
        dispatch(loginFailure());
    }
}

export const register = async (user) => {
    try{
     await publicRequest.post('/register',user);
    }catch(error){
        console.log(error);
    }
}