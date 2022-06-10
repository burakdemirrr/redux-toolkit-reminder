import { createSlice } from "@reduxjs/toolkit";
export const slice=createSlice({
    name:"root",
    initialState:{
        cartItems:[],
    },
    reducers:{
        addToCart : (state,action)=>{
            state.cartItems.push(action.payload)
        }   
    }
})


const {addToCart} =slice.actions;

export default slice.reducer;