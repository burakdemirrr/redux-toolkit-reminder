import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./redux/rootSlice"
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
   root: rootReducer,
 });
 
 const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['rootReducer'],
 };
 
 const persistedReducer = persistReducer(persistConfig, reducers);
 
 const store = configureStore({
   reducer: persistedReducer,
   devTools: process.env.NODE_ENV !== 'production',
   middleware: [thunk],
 });
 
 export default store;