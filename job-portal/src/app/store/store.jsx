import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { baseApi } from '../services/baseApi';
import authReducer from '../store/slices/authSlice';



export const store = configureStore({

    reducer:{
    
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)

})