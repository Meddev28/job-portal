// RecruiterProfile.js
import React, { useState } from 'react';
import { 
    IconMapPin, 
    IconBriefcase, 
    IconCalendar,
    IconCurrencyDollar,
    IconHeart,
    IconHeartFilled,
    IconMail,
    IconExternalLink,
    IconStar,
    IconUser,
    IconBuilding,
    IconUsers,
    IconGlobe,
    IconPhone,
    IconMessage,
    IconEdit,
    IconPlus,
    IconUpload,
    IconTrash,
    IconWorld,
    IconBuildingSkyscraper,
    IconRocket,
    IconTrendingUp,
    IconAward,
    IconCheck
} from "@tabler/icons-react";
import Footer from '../components/HomePage/footer';
import Header from '../components/HomePage/header/header';

const RecruiterProfile = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [isEditing, setIsEditing] = useState(false);

    // Company data - this is what the recruiter sees and can edit
    const company = {
        id: 1,
        name: "TechCorp International Inc.",
        tagline: "Innovating the Future of Technology",
        logo: "/techcorp-logo.png",
        banner: "/company-banner.jpg",
        location: "San Francisco, California, USA",
        industry: "Technology & Software Development",
        companySize: "1000-5000 employees",
        founded: "2015",
        website: "https://techcorp.com",
        email: "careers@techcorp.com",
        phone: "+1 (555) 123-4567",
        description: "TechCorp is a leading technology company dedicated to creating innovative software solutions that transform businesses and improve lives worldwide.",
        longDescription: "TechCorp International Inc. is a global technology leader specializing in enterprise software solutions, cloud computing, and digital transformation services. With a team of over 3,000 talented professionals across 15 countries, we deliver cutting-edge solutions to Fortune 500 companies and startups alike.",
        rating: 4.8,
        reviews: 247,
        openJobs: 12,
        verified: true,
        type: "Public Company",
        headquarters: "San Francisco, California, USA",
        specialities: ["Enterprise Software", "Cloud Computing", "AI & Machine Learning", "Digital Transformation", "Cybersecurity"],
        benefits: ["Health Insurance", "Remote Work Options", "Professional Development", "Stock Options", "Flexible PTO", "Wellness Programs"],
        techStack: ["React", "TypeScript", "Node.js", "Python", "AWS", "Kubernetes", "Docker", "MongoDB", "PostgreSQL"]
    };

    // Company culture & values
    const companyValues = [
        {
            id: 1,
            title: "Innovation",
            description: "We constantly push boundaries and explore new technologies to stay ahead of the curve."
        },
        {
            id: 2,
            title: "Collaboration", 
            description: "We believe in the power of teamwork and cross-functional cooperation."
        },
        {
            id: 3,
            title: "Excellence",
            description: "We strive for excellence in everything we do, from code quality to customer service."
        }
    ];

    // Team members (recruiters/HR team)
    const recruitmentTeam = [
        {
            id: 1,
            name: "Jennifer Wilson",
            position: "Head of Talent Acquisition",
            email: "jennifer@techcorp.com",
            phone: "+1 (555) 123-4567"
        },
        {
            id: 2,
            name: "Mike Rodriguez",
            position: "Technical Recruiter", 
            email: "mike@techcorp.com",
            phone: "+1 (555) 123-4568"
        },
        {
            id: 3,
            name: "Sarah Chen",
            position: "HR Manager",
            email: "sarah@techcorp.com", 
            phone: "+1 (555) 123-4569"
        }
    ];

    // Current open positions
    const openPositions = [
        {
            id: 1,
            title: "Senior Frontend Developer with React and TypeScript",
            type: "Full-time",
            experience: "Senior", 
            salary: "$120,000 - $150,000",
            applicants: 24,
            posted: "2 days ago",
            remote: "Remote",
            skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Jest"],
            department: "Engineering",
            location: "San Francisco, CA",
            status: "Active"
        },
        {
            id: 2,
            title: "Product Manager",
            type: "Full-time",
            experience: "Mid-level",
            salary: "$90,000 - $120,000", 
            applicants: 18,
            posted: "1 day ago",
            remote: "Hybrid",
            skills: ["Product Strategy", "UX Research", "Agile", "Data Analysis"],
            department: "Product",
            location: "New York, NY",
            status: "Active"
        }
    ];

    // Office locations
    const offices = [
        {
            city: "San Francisco",
            country: "USA",
            type: "Headquarters",
            employees: "1000+",
            address: "123 Tech Street, San Francisco, CA"
        },
        {
            city: "New York", 
            country: "USA",
            type: "Regional Office",
            employees: "500+",
            address: "456 Innovation Ave, New York, NY"
        },
        {
            city: "London",
            country: "UK", 
            type: "European HQ",
            employees: "300+",
            address: "789 Business Rd, London, UK"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header />
            
            {/* Company Header with Banner */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto">
                    {/* Banner */}
                    <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="absolute bottom-6 left-8 flex items-end space-x-6">
                            {/* Company Logo with Edit */}
                            <div className="relative group">
                                <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                                    <div className="w-28 h-28 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                                        <IconBuilding className="h-12 w-12 text-blue-600" />
                                    </div>
                                </div>
                                {company.verified && (
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                        <IconCheck className="h-4 w-4 text-white" />
                                    </div>
                                )}
                                <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <IconEdit className="h-4 w-4 text-gray-600" />
                                </button>
                            </div>
                            
                            {/* Company Basic Info with Edit */}
                            <div className="text-white mb-6">
                                <div className="flex items-center space-x-3 mb-2">
                                    <h1 className="text-3xl font-bold">{company.name}</h1>
                                    <button 
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="p-1 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200"
                                    >
                                        <IconEdit className="h-4 w-4" />
                                    </button>
                                </div>
                                <p className="text-xl opacity-90 mb-3">{company.tagline}</p>
                                <div className="flex items-center space-x-6 text-sm">
                                    <div className="flex items-center space-x-1">
                                        <IconMapPin className="h-4 w-4" />
                                        <span>{company.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <IconStar className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span>{company.rating} ({company.reviews} reviews)</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <IconBriefcase className="h-4 w-4" />
                                        <span>{company.openJobs} open positions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Action Buttons for Recruiter */}
                        <div className="absolute bottom-6 right-8 flex space-x-4">
                            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 backdrop-blur-sm">
                                <IconUpload className="h-5 w-5" />
                                <span>Update Banner</span>
                            </button>
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2 shadow-lg">
                                <IconEdit className="h-5 w-5" />
                                <span>Edit Profile</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Profile Completion */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Profile Strength</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">92% Complete</span>
                                    <span className="text-blue-600 font-semibold">Excellent</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                                </div>
                                <p className="text-xs text-gray-500">Complete profile to attract more candidates</p>
                            </div>
                        </div>

                        {/* Contact Information - Editable */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-gray-900">Contact Information</h3>
                                <button className="text-blue-600 hover:text-blue-700">
                                    <IconEdit className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconMail className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{company.email}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconPhone className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{company.phone}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconMapPin className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{company.headquarters}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconGlobe className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{company.website}</span>
                                </div>
                            </div>
                        </div>

                        {/* Recruitment Team */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-gray-900">Recruitment Team</h3>
                                <button className="text-blue-600 hover:text-blue-700">
                                    <IconPlus className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="space-y-4">
                                {recruitmentTeam.map((member) => (
                                    <div key={member.id} className="flex items-center space-x-3 group">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <IconUser className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                                            <p className="text-gray-600 text-xs">{member.position}</p>
                                        </div>
                                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <IconEdit className="h-3 w-3 text-gray-400" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Company Specialities - Editable */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-gray-900">Specialities</h3>
                                <button className="text-blue-600 hover:text-blue-700">
                                    <IconPlus className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {company.specialities.map((speciality, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium group flex items-center space-x-1"
                                    >
                                        <span>{speciality}</span>
                                        <IconTrash className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        {/* Navigation Tabs */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6">
                            <div className="flex border-b border-gray-200">
                                {['about', 'jobs', 'team', 'offices'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 ${
                                            activeTab === tab
                                                ? 'text-blue-600 border-b-2 border-blue-600'
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="p-6">
                                {/* About Tab - Editable */}
                                {activeTab === 'about' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
                                            <button className="text-blue-600 hover:text-blue-700">
                                                <IconEdit className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {company.longDescription}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Tech Stack - Editable */}
                                            <div>
                                                <div className="flex justify-between items-center mb-3">
                                                    <h4 className="font-semibold text-gray-900">Technology Stack</h4>
                                                    <button className="text-blue-600 hover:text-blue-700">
                                                        <IconPlus className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {company.techStack.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium group flex items-center space-x-1"
                                                        >
                                                            <span>{tech}</span>
                                                            <IconTrash className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Employee Benefits - Editable */}
                                            <div>
                                                <div className="flex justify-between items-center mb-3">
                                                    <h4 className="font-semibold text-gray-900">Employee Benefits</h4>
                                                    <button className="text-blue-600 hover:text-blue-700">
                                                        <IconPlus className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <div className="space-y-2">
                                                    {company.benefits.map((benefit, index) => (
                                                        <div key={index} className="flex items-center justify-between group">
                                                            <div className="flex items-center space-x-2">
                                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                                <span className="text-sm text-gray-600">{benefit}</span>
                                                            </div>
                                                            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                <IconTrash className="h-3 w-3 text-red-500" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Company Values - Editable */}
                                        <div>
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-lg font-semibold text-gray-900">Our Values</h3>
                                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
                                                    <IconPlus className="h-4 w-4" />
                                                    <span>Add Value</span>
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {companyValues.map((value) => (
                                                    <div key={value.id} className="bg-blue-50 rounded-xl p-4 group relative">
                                                        <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                                                        <p className="text-gray-600 text-sm">{value.description}</p>
                                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-1">
                                                            <button className="p-1 bg-blue-100 text-blue-600 rounded">
                                                                <IconEdit className="h-3 w-3" />
                                                            </button>
                                                            <button className="p-1 bg-red-100 text-red-600 rounded">
                                                                <IconTrash className="h-3 w-3" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Jobs Tab - Company's Job Posts */}
                                {activeTab === 'jobs' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Our Job Posts ({openPositions.length})</h3>
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
                                                <IconPlus className="h-4 w-4" />
                                                <span>Post New Job</span>
                                            </button>
                                        </div>
                                        <div className="space-y-4">
                                            {openPositions.map((job) => (
                                                <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200 group">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900 text-lg mb-1">{job.title}</h4>
                                                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                                                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                                    {job.department}
                                                                </span>
                                                                <span>{job.location}</span>
                                                                <span>{job.remote}</span>
                                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                                                                    {job.status}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="font-semibold text-gray-900">{job.salary}</p>
                                                            <p className="text-gray-600 text-sm">{job.posted}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {job.skills.map((skill, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                            <span>{job.type}</span>
                                                            <span>•</span>
                                                            <span>{job.experience} Level</span>
                                                            <span>•</span>
                                                            <span className="font-semibold text-blue-600">{job.applicants} applicants</span>
                                                        </div>
                                                        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200">
                                                                View Applicants
                                                            </button>
                                                            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 transition-all duration-200">
                                                                Edit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Team Tab - Recruitment Team Management */}
                                {activeTab === 'team' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Recruitment Team</h3>
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
                                                <IconPlus className="h-4 w-4" />
                                                <span>Add Team Member</span>
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {recruitmentTeam.map((member) => (
                                                <div key={member.id} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all duration-200 group">
                                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <IconUser className="h-8 w-8 text-blue-600" />
                                                    </div>
                                                    <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                                                    <p className="text-blue-600 text-sm mb-3">{member.position}</p>
                                                    <div className="space-y-1 text-sm text-gray-600">
                                                        <p>{member.email}</p>
                                                        <p>{member.phone}</p>
                                                    </div>
                                                    <div className="mt-4 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                        <button className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                                            <IconEdit className="h-4 w-4" />
                                                        </button>
                                                        <button className="p-2 bg-red-100 text-red-600 rounded-lg">
                                                            <IconTrash className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Offices Tab - Company Locations */}
                                {activeTab === 'offices' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Our Offices</h3>
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
                                                <IconPlus className="h-4 w-4" />
                                                <span>Add Office</span>
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {offices.map((office, index) => (
                                                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200 group">
                                                    <div className="flex justify-between items-start mb-3">
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900">{office.city}</h4>
                                                            <p className="text-blue-600 text-sm">{office.country} • {office.type}</p>
                                                        </div>
                                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                            {office.employees}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 text-sm mb-4">{office.address}</p>
                                                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200">
                                                            Edit
                                                        </button>
                                                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:border-gray-400 transition-all duration-200">
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default RecruiterProfile;