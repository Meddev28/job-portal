import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRegisterUserMutation } from '../app/services/authApi';


const schema = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    userType: yup.string().required()
})

const RegisterForm = () => {

    const [registerUser, { isLoading: apiLoading, isError }] = useRegisterUserMutation();



    const { register, handleSubmit, formState, resetField } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            userType: 'CANDIDATE'
        }
    })

    const { errors, isSubmitSuccessful, isLoading, submitCount } = formState


    const submitForm = async (data) => {


        try {
            await registerUser(data);
            console.log(data);
            resetField('first_name');
            resetField('last_name');
            resetField('email');
            resetField('password');

        } catch (err) {

            console.error('Registration error:', err);
        }
    };

    if (apiLoading) {
        return <div >
            <strong>Loading...</strong>
        </div>
    }

    if (isError) {
        return <div >
            <strong>Error</strong>
        </div>
    }


    return (



        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            {submitCount > 5 ? (<p>Please contact the administrator</p>) : <div> {isSubmitSuccessful && (
                <div>
                    <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-4">
                        Registration successful! Redirecting...
                    </div>
                </div>
            )}
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            sign in to your existing account
                        </a>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
                            {/* First Name */}
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="first_name"
                                        type="text"
                                        autoComplete="given-name"

                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Enter your first name"
                                        {...register("first_name")}

                                    />
                                    <p>{errors.first_name?.message}</p>
                                </div>
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="last_name"
                                        type="text"
                                        autoComplete="family-name"


                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Enter your last name"
                                        {...register("last_name")}
                                    />
                                    <p>{errors.last_name?.message}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        type="email"
                                        autoComplete="email"


                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Enter your email address"
                                        {...register("email")}
                                    />
                                    <p>{errors.email?.message}</p>
                                </div>

                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        type="password"
                                        autoComplete="new-password"


                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Enter your password"
                                        {...register("password")}
                                    />
                                    <p>{errors.password?.message}</p>
                                </div>
                            </div>

                            {/* User Type Selection */}
                            <div>
                                <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                                    I am a
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="userType"
                                        {...register("userType")}


                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="CANDIDATE">Candidate - Looking for jobs</option>
                                        <option value="RECRUITER">Recruiter - Hiring talent</option>
                                    </select>
                                    <p>{errors.userType?.message}</p>
                                </div>

                            </div>


                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitSuccessful}
                                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </div>
                                    ) : (
                                        'Create Account'
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Additional Links */}
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">
                                        Already have an account?
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="button"
                                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in instead
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default RegisterForm;