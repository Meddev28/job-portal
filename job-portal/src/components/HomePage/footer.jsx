// Footer.js
import React from 'react';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react"

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white'>
            {/* Main Footer */}
            <div className='px-4 sm:px-8 lg:px-20 py-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* Company Info */}
                        <div className='space-y-4'>
                            <h3 className='text-2xl font-bold text-white'>JobFinder</h3>
                            <p className='text-gray-400 leading-relaxed'>
                                Connecting talented professionals with amazing opportunities worldwide. Your dream job is just a search away.
                            </p>
                            <div className='flex space-x-4'>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                    <IconBrandTwitter className='h-5 w-5' />
                                </a>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                    <IconBrandLinkedin className='h-5 w-5' />
                                </a>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                    <IconBrandFacebook className='h-5 w-5' />
                                </a>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                    <IconBrandInstagram className='h-5 w-5' />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className='space-y-4'>
                            <h4 className='text-lg font-semibold text-white'>Quick Links</h4>
                            <ul className='space-y-2'>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                        Browse Jobs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                        Companies
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                        Career Advice
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                        Success Stories
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className='space-y-4'>
                            <h4 className='text-lg font-semibold text-white'>Resources</h4>
                            <ul className='space-y-2'>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                        Contact Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className='space-y-4'>
                            <h4 className='text-lg font-semibold text-white'>Stay Updated</h4>
                            <p className='text-gray-400'>
                                Subscribe to get the latest job opportunities and career tips.
                            </p>
                            <div className='space-y-3'>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                />
                                <button className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className='border-t border-gray-800'>
                <div className='px-4 sm:px-8 lg:px-20 py-6'>
                    <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                        <div className='text-gray-400 text-sm'>
                            © 2024 JobFinder. All rights reserved.
                        </div>
                        <div className='flex space-x-6 text-sm'>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                Privacy Policy
                            </a>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                Terms of Service
                            </a>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors duration-200'>
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;