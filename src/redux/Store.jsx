import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice';
import  allTodos  from "./slices/AllTodos";
import weatherReducer from './slices/ApiSlice'

export const store = configureStore(
    {
        reducer:{
            auth:authReducer,
            alltodo:allTodos,
            weather: weatherReducer,
        }
    }
)