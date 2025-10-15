import React from 'react';
import { IconSearch, IconBriefcase, IconUsers, IconTrendingUp, IconStar, IconAward, IconCheck } from "@tabler/icons-react"

const Main = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
            {/* Hero Section */}
            <div className='px-4 sm:px-8 lg:px-20 gap-8 lg:gap-14 py-12'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Content */}
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium'>
                                <IconTrendingUp className='h-4 w-4' />
                                <span>10,000+ jobs posted daily</span>
                            </div>
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                                Find your <span className='text-blue-600'>dream job</span> with us
                            </h1>
                            <p className='text-lg text-gray-600 leading-relaxed max-w-lg'>
                                Good life begins with a good company. Start explore thousands of jobs in one place and take the next step in your career journey.
                            </p>
                        </div>

                        {/* Search Form */}
                        <div className='bg-white rounded-2xl shadow-lg p-6 space-y-6 border border-gray-100'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='space-y-2'>
                                    <label htmlFor="job-title" className='block text-sm font-medium text-gray-700'>
                                        Job Title or Keyword
                                    </label>
                                    <div className='relative text-black'>
                                        <input 
                                            type="text" 
                                            id="job-title"
                                            placeholder="e.g. Software Engineer" 
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none'
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor="location" className='block text-sm font-medium text-gray-700'>
                                        Location
                                    </label>
                                    <div className='relative text-black'>
                                        <input 
                                            type="text" 
                                            id="location"
                                            placeholder="e.g. New York" 
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none'
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <button className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                                <IconSearch className='h-5 w-5' />
                                Search Jobs
                            </button>
                        </div>

                        {/* Quick Stats */}
                        <div className='flex flex-wrap gap-6 text-sm text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                <span>10,000+ active jobs</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                <span>5,000+ companies</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                                <span>Instant apply</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='relative'>
                        <div className='relative z-10'>
                            <img 
                                src="/job.png" 
                                alt="Career professionals" 
                                className='w-full max-w-md mx-auto lg:max-w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className='absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl'></div>
                        <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl'></div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className='bg-white py-16 px-4 sm:px-8 lg:px-20'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                            Why Choose JobFinder?
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            We provide the best platform to connect talented professionals with top companies worldwide.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300'>
                            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <IconBriefcase className='h-8 w-8 text-blue-600' />
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-3'>Wide Job Selection</h3>
                            <p className='text-gray-600'>
                                Access thousands of job opportunities from top companies across various industries.
                            </p>
                        </div>

                        <div className='text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300'>
                            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <IconUsers className='h-8 w-8 text-green-600' />
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-3'>Smart Matching</h3>
                            <p className='text-gray-600'>
                                Our AI-powered system matches your skills and preferences with the perfect job.
                            </p>
                        </div>

                        <div className='text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300'>
                            <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <IconAward className='h-8 w-8 text-purple-600' />
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-3'>Career Growth</h3>
                            <p className='text-gray-600'>
                                Find opportunities that help you grow professionally and achieve your career goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className='bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4 sm:px-8 lg:px-20'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
                        <div className='text-white'>
                            <div className='text-3xl sm:text-4xl font-bold mb-2'>50K+</div>
                            <div className='text-blue-100'>Jobs Available</div>
                        </div>
                        <div className='text-white'>
                            <div className='text-3xl sm:text-4xl font-bold mb-2'>15K+</div>
                            <div className='text-blue-100'>Companies</div>
                        </div>
                        <div className='text-white'>
                            <div className='text-3xl sm:text-4xl font-bold mb-2'>2M+</div>
                            <div className='text-blue-100'>Candidates</div>
                        </div>
                        <div className='text-white'>
                            <div className='text-3xl sm:text-4xl font-bold mb-2'>95%</div>
                            <div className='text-blue-100'>Success Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className='bg-white py-16 px-4 sm:px-8 lg:px-20'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                        Ready to Start Your Journey?
                    </h2>
                    <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
                        Join thousands of professionals who have found their dream jobs through our platform.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <button className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl'>
                            Create Your Profile
                        </button>
                        <button className='border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;