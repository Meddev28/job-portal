import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import authReducer from '../features/authSlice';
import { baseApi } from '../services/baseApi';



export const store = configureStore({

    reducer:{
    
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)

})