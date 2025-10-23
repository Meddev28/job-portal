import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1/auth'
        
    }),
    
    tagTypes: ['Auth'], // Declare tag types at the top

    endpoints: (builder) => ({

        registerUser: builder.mutation({
            query: (body) => ({
                url: '/register',
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
                url: '/login',
                method: 'POST',
                body
            }),
            // After login, invalidate all auth-related data
            invalidatesTags: ['Auth']
        }),

    })

})

export const {useRegisterUserMutation, useLoginUserMutation} = authApi