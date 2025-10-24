import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setCredentials } from "../store/slices/authSlice";
import { baseApi } from "./baseApi";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        registerUser: builder.mutation({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body
            }),
            // Register doesn't invalidate Auth since user isn't logged in yet
            // But you might want to invalidate if register auto-logs in
            invalidatesTags: (result, error, body) => 
                result?.token ? ['Auth'] : [] // Only invalidate if token is returned
        }),

        loginUser: builder.mutation({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body
            }),
            // After login, invalidate all auth-related data
            invalidatesTags: ['Auth'],

            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const {data} = await queryFulfilled
                    dispatch(setCredentials({ 
                        user:data.user,
                        token:data.token,
                     }))

                } catch(err){
                    console.log(err)
                }
            }
        }),

    })

})

export const {useRegisterUserMutation, useLoginUserMutation} = authApi