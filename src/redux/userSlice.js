import {createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
      currentUser : null,
      isPending : false,
      error : false
    },
    reducers:{
       loginStart : (state) => {
        state.isPending = true;
       },
       loginSuccess : (state,actions) => {
        state.isPending = false;
        state.currentUser = actions.payload
       },
       loginFailure : (state) => {
        state.isPending = false;
        state.error = true;
       }
    }
})

export const {loginFailure, loginStart, loginSuccess} = userSlice.actions;
export default userSlice.reducer;