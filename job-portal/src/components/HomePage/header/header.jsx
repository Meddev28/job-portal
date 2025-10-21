// Header.js
import React, { useState } from 'react';
import { IconHome, IconUser, IconSettings, IconBell, IconUserCircle, IconSearch, IconLogout, IconMenu2, IconX } from "@tabler/icons-react";
import NavLinks from './navlinks';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    return (
        <>
            <header className='bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50'>
                <div className='flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <Link className='text-amber-400 text-2xl sm:text-3xl font-bold hover:text-amber-500 transition-colors duration-200' to="/">
                            JobHook
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:block'>
                        {NavLinks()}
                    </div>

                    {/* Right Section - Desktop */}
                    <div className='hidden md:flex items-center gap-6'>
                        {/* Search Icon */}
                        <button className='text-gray-600 hover:text-amber-400 transition-colors duration-200'>
                            <IconSearch className='h-5 w-5' />
                        </button>
                        
                        {/* Notifications */}
                        <div className='relative'>
                            <button className='text-gray-600 hover:text-amber-400 transition-colors duration-200 relative'>
                                <IconBell className='h-5 w-5' />
                                <span className='absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full'></span>
                            </button>
                        </div>

                        {/* Profile Dropdown */}
                        <div className='relative'>
                            <button 
                                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                className='flex items-center gap-2 text-gray-700 hover:text-amber-400 transition-colors duration-200'
                            >
                                <IconUserCircle className='h-8 w-8' />
                                <span className='font-medium'>Mohammed</span>
                            </button>

                            {/* Dropdown Menu */}
                            {isProfileDropdownOpen && (
                                <div className='absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50'>
                                    <Link 
                                        to="/profile" 
                                        className='flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200'
                                    >
                                  
                                        <IconUser className='h-4 w-4' />
                                        <span>My Profile</span>
                                       
                                    </Link>
                                    <Link 
                                        to="/settings" 
                                        className='flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200'
                                    >
                                        <IconSettings className='h-4 w-4' />
                                        <span>Settings</span>
                                    </Link>
                                    <hr className='my-2' />
                                    <button className='flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left transition-colors duration-200'>
                                        <IconLogout className='h-4 w-4' />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='md:hidden text-gray-600 hover:text-amber-400 transition-colors duration-200'
                    >
                        {isMobileMenuOpen ? <IconX className='h-6 w-6' /> : <IconMenu2 className='h-6 w-6' />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className='md:hidden bg-white border-t border-gray-200 px-4 py-4'>
                        <div className='space-y-4'>
                            {/* Mobile Navigation Links */}
                            <div className='pb-4 border-b border-gray-200'>
                                {NavLinks()}
                            </div>
                            
                            {/* Mobile User Menu */}
                            <div className='space-y-3'>
                                <Link 
                                    to="/profile" 
                                    className='flex items-center gap-3 py-2 text-gray-700 hover:text-amber-400 transition-colors duration-200'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IconUser className='h-5 w-5' />
                                    <span>My Profile</span>
                                </Link>
                                <Link 
                                    to="/settings" 
                                    className='flex items-center gap-3 py-2 text-gray-700 hover:text-amber-400 transition-colors duration-200'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IconSettings className='h-5 w-5' />
                                    <span>Settings</span>
                                </Link>
                                <button className='flex items-center gap-3 py-2 text-red-600 hover:text-red-700 w-full text-left transition-colors duration-200'>
                                    <IconLogout className='h-5 w-5' />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Overlay for dropdown */}
            {isProfileDropdownOpen && (
                <div 
                    className='fixed inset-0 z-40' 
                    onClick={() => setIsProfileDropdownOpen(false)}
                ></div>
            )}
        </>
    );
}

export default Header;