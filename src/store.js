import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./redux/rootSlice"

const store=configureStore({
   reducer:{
    root:rootReducer
   }
})

export default store;