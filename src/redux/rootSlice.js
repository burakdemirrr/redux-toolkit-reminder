import { createSlice } from "@reduxjs/toolkit";
export const slice=createSlice({
    name:"root",
    initialState:{
        cartItems:[],
    },
    reducers:{
        addToCart : (state,action)=>{
            state.cartItems.push(action.payload)
        } ,
        removeFromCart : (state,action)=>{
            state.cartItems=state.cartItems.filter(
                cartItem=>cartItem.id !== action.payload.id
            )
        }  
    }
})


export const {addToCart,removeFromCart} =slice.actions;

export default slice.reducer;