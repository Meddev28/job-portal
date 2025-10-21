// CandidateProfile.js
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
    IconCertificate,
    IconSchool,
    IconAward,
    IconClock,
    IconCheck,
    IconGlobe,
    IconPhone,
    IconMessage,
    IconEdit,
    IconPlus,
    IconUpload,
    IconTrash
} from "@tabler/icons-react";
import Footer from '../components/HomePage/footer';
import Header from '../components/HomePage/header/header';
import { Link } from 'react-router-dom';

const CandidateProfile = () => {
    const [isSaved, setIsSaved] = useState(false);
    const [activeTab, setActiveTab] = useState('about');
    const [isEditing, setIsEditing] = useState(false);

    // Candidate data - this would typically come from user context or API
    const candidate = {
        id: 1,
        name: "Alex Thompson",
        title: "Full Stack Developer",
        avatar: "/alex-avatar.png",
        banner: "/profile-banner.jpg",
        location: "New York, NY, USA",
        experience: "4+ years",
        rate: "$70 - $100/hr",
        availability: "Available immediately",
        responseTime: "Usually responds in 1 hour",
        description: "Passionate full stack developer with expertise in React, Node.js, and modern web technologies. I love building scalable applications that solve real-world problems.",
        longDescription: "I'm a passionate full stack developer with over 4 years of experience creating exceptional digital experiences. My expertise lies in React, Node.js, and modern web technologies. I thrive in collaborative environments and enjoy solving complex problems with elegant solutions. Currently looking for new opportunities to work on challenging projects.",
        rating: 4.8,
        projects: 32,
        completedJobs: 28,
        verified: true,
        languages: ["English (Native)", "Spanish (Conversational)"],
        skills: ["React", "Node.js", "TypeScript", "MongoDB", "Express.js", "PostgreSQL", "Git", "AWS", "Docker", "Jest"],
        email: "alex.thompson@example.com",
        phone: "+1 (555) 987-6543",
        website: "alexthompson.dev",
        linkedin: "linkedin.com/in/alexthompson",
        github: "github.com/alexthompson"
    };

    // Experiences data
    const experiences = [
        {
            id: 1,
            company: "TechInnovate Inc.",
            position: "Full Stack Developer",
            period: "2022 - Present",
            duration: "2 years",
            location: "New York, NY",
            description: "Developed and maintained web applications using React and Node.js, collaborating with cross-functional teams.",
            achievements: [
                "Led development of customer portal serving 50k+ users",
                "Improved application performance by 35%",
                "Mentored 2 junior developers"
            ]
        },
        {
            id: 2,
            company: "Digital Creations",
            position: "Frontend Developer",
            period: "2020 - 2022",
            duration: "2 years",
            location: "Remote",
            description: "Built responsive web applications and collaborated with design teams to implement pixel-perfect UIs.",
            achievements: [
                "Developed 10+ client applications",
                "Implemented design system used across 5 projects",
                "Reduced bundle size by 40% through code splitting"
            ]
        }
    ];

    // Education data
    const education = [
        {
            id: 1,
            institution: "University of Technology",
            degree: "Bachelor of Science in Computer Science",
            period: "2016 - 2020",
            location: "Boston, MA",
            description: "Graduated Magna Cum Laude with focus on software engineering and web technologies."
        },
        {
            id: 2,
            institution: "CodeMaster Bootcamp",
            degree: "Full Stack Web Development",
            period: "2020",
            location: "Online",
            description: "Intensive 6-month program covering modern web development technologies and best practices."
        }
    ];

    // Certifications data
    const certifications = [
        {
            id: 1,
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2023",
            credential: "Credential ID: AWS-DEV-12345"
        },
        {
            id: 2,
            name: "React Professional Certification",
            issuer: "Meta",
            date: "2022",
            credential: "Credential ID: META-REACT-67890"
        }
    ];

    // Portfolio projects
    const portfolioProjects = [
        {
            id: 1,
            name: "E-commerce Platform",
            description: "Full-stack e-commerce solution with React and Node.js",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "https://github.com/alexthompson/ecommerce-platform",
            image: "/project1.jpg"
        },
        {
            id: 2,
            name: "Task Management App",
            description: "Collaborative task management application",
            technologies: ["React", "Firebase", "Tailwind CSS"],
            link: "https://github.com/alexthompson/task-app",
            image: "/project2.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header />
            
            {/* Profile Header with Banner */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto">
                    {/* Banner */}
                    <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="absolute bottom-6 left-8 flex items-end space-x-6">
                            {/* Avatar with Edit */}
                            <div className="relative group">
                                <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                                    <div className="w-28 h-28 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                                        <IconUser className="h-12 w-12 text-blue-600" />
                                    </div>
                                </div>
                                {candidate.verified && (
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                        <IconCheck className="h-4 w-4 text-white" />
                                    </div>
                                )}
                                <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <IconEdit className="h-4 w-4 text-gray-600" />
                                </button>
                            </div>
                            
                            {/* Basic Info */}
                            <div className="text-white mb-6">
                                <div className="flex items-center space-x-3 mb-2">
                                    <h1 className="text-3xl font-bold">{candidate.name}</h1>
                                    <button 
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="p-1 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200"
                                    >
                                        <IconEdit className="h-4 w-4" />
                                    </button>
                                </div>
                                <p className="text-xl opacity-90 mb-3">{candidate.title}</p>
                                <div className="flex items-center space-x-6 text-sm">
                                    <div className="flex items-center space-x-1">
                                        <IconMapPin className="h-4 w-4" />
                                        <span>{candidate.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <IconStar className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span>{candidate.rating} ({candidate.projects} projects)</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <IconBriefcase className="h-4 w-4" />
                                        <span>{candidate.experience}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="absolute bottom-6 right-8 flex space-x-4">
                            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 backdrop-blur-sm">
                                <IconUpload className="h-5 w-5" />
                                <span>Update CV</span>
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
                                    <span className="text-gray-600">85% Complete</span>
                                    <span className="text-blue-600 font-semibold">Excellent</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                                <p className="text-xs text-gray-500">Complete your profile to get more visibility</p>
                            </div>
                        </div>

                        {/* Contact Card */}
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
                                    <span className="text-sm">{candidate.email}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconPhone className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{candidate.phone}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconMapPin className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{candidate.location}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconGlobe className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{candidate.website}</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-semibold text-gray-900 mb-6">My Stats</h3>
                            <div className="space-y-5">
                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <IconCurrencyDollar className="h-5 w-5 text-blue-500" />
                                        <span className="text-gray-600 font-medium">Hourly Rate</span>
                                    </div>
                                    <p className="font-semibold text-gray-900 text-lg pl-8">{candidate.rate}</p>
                                </div>

                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <IconBriefcase className="h-5 w-5 text-purple-500" />
                                        <span className="text-gray-600 font-medium">Jobs Completed</span>
                                    </div>
                                    <p className="font-semibold text-gray-900 text-lg pl-8">{candidate.completedJobs}</p>
                                </div>

                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <IconStar className="h-5 w-5 text-yellow-500" />
                                        <span className="text-gray-600 font-medium">Success Rate</span>
                                    </div>
                                    <p className="font-semibold text-gray-900 text-lg pl-8">96%</p>
                                </div>

                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <IconClock className="h-5 w-5 text-blue-500" />
                                        <span className="text-gray-600 font-medium">Response Time</span>
                                    </div>
                                    <p className="font-semibold text-blue-600 text-lg pl-8">{candidate.responseTime}</p>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-gray-900">Languages</h3>
                                <button className="text-blue-600 hover:text-blue-700">
                                    <IconPlus className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="space-y-2">
                                {candidate.languages.map((language, index) => (
                                    <div key={index} className="flex items-center justify-between group">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span className="text-sm text-gray-600">{language}</span>
                                        </div>
                                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <IconTrash className="h-3 w-3 text-red-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        {/* Navigation Tabs */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6">
                            <div className="flex border-b border-gray-200">
                                {['about', 'experience', 'education', 'portfolio', 'certifications'].map((tab) => (
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
                                {/* About Tab */}
                                {activeTab === 'about' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-semibold text-gray-900">About Me</h3>
                                            <button className="text-blue-600 hover:text-blue-700">
                                                <IconEdit className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {candidate.longDescription}
                                        </p>

                                        <div>
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-lg font-semibold text-gray-900">Skills & Expertise</h3>
                                                <button className="text-blue-600 hover:text-blue-700">
                                                    <IconPlus className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap gap-3">
                                                {candidate.skills.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200 cursor-pointer group flex items-center space-x-1"
                                                    >
                                                        <span>{skill}</span>
                                                        <IconTrash className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Experience Tab */}
                                {activeTab === 'experience' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
                                                <IconPlus className="h-4 w-4" />
                                                <span>Add Experience</span>
                                            </button>
                                        </div>
                                        {experiences.map((exp) => (
                                            <div key={exp.id} className="border-l-2 border-blue-500 pl-6 pb-6 relative group">
                                                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 text-lg">{exp.position}</h4>
                                                        <p className="text-blue-600 font-medium">{exp.company}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-gray-900 font-medium">{exp.period}</p>
                                                        <p className="text-gray-600 text-sm">{exp.duration} • {exp.location}</p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-600 mb-3">{exp.description}</p>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, index) => (
                                                        <li key={index} className="flex items-start space-x-2 text-gray-600">
                                                            <IconAward className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-sm">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
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
                                )}

                                {/* Education Tab */}
                                {activeTab === 'education' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
                                                <IconPlus className="h-4 w-4" />
                                                <span>Add Education</span>
                                            </button>
                                        </div>
                                        {education.map((edu) => (
                                            <div key={edu.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100 group relative">
                                                <div className="flex items-start space-x-4">
                                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                                        <IconSchool className="h-6 w-6 text-blue-600" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                                                        <p className="text-blue-600 text-sm mb-1">{edu.institution}</p>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-gray-600 text-sm">{edu.location} • {edu.period}</span>
                                                        </div>
                                                        <p className="text-gray-600 text-sm mt-2">{edu.description}</p>
                                                    </div>
                                                </div>
                                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
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
                                )}

                                {/* Portfolio Tab */}
                                {activeTab === 'portfolio' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Portfolio Projects</h3>
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
                                                <IconPlus className="h-4 w-4" />
                                                <span>Add Project</span>
                                            </button>
                                        </div>
                                        <div className="grid gap-4">
                                            {portfolioProjects.map((project) => (
                                                <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-200 group">
                                                    <div className="flex justify-between items-start mb-3">
                                                        <h4 className="font-semibold text-gray-900 text-lg">{project.name}</h4>
                                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
                                                            <button className="p-1 bg-blue-100 text-blue-600 rounded">
                                                                <IconEdit className="h-3 w-3" />
                                                            </button>
                                                            <button className="p-1 bg-red-100 text-red-600 rounded">
                                                                <IconTrash className="h-3 w-3" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {project.technologies.map((tech, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <a 
                                                        href={project.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center space-x-1"
                                                    >
                                                        <span>View Project</span>
                                                        <IconExternalLink className="h-3 w-3" />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Certifications Tab */}
                                {activeTab === 'certifications' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
                                                <IconPlus className="h-4 w-4" />
                                                <span>Add Certification</span>
                                            </button>
                                        </div>
                                        <div className="grid gap-4">
                                            {certifications.map((cert) => (
                                                <div key={cert.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100 group relative">
                                                    <div className="flex items-start space-x-4">
                                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                                            <IconCertificate className="h-6 w-6 text-blue-600" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                                                            <p className="text-blue-600 text-sm mb-1">{cert.issuer}</p>
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-gray-600 text-sm">{cert.credential}</span>
                                                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                                    Issued {cert.date}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
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
                                )}
                            </div>
                        </div>

                        {/* Quick Actions Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button className="bg-blue-50 text-blue-700 py-4 rounded-xl font-semibold hover:bg-blue-100 transition-all duration-200 flex items-center justify-center space-x-2">
                                    <IconUpload className="h-5 w-5" />
                                    <span>Update Resume</span>
                                </button>
                                <button className="bg-green-50 text-green-700 py-4 rounded-xl font-semibold hover:bg-green-100 transition-all duration-200 flex items-center justify-center space-x-2">
                                    <IconBriefcase className="h-5 w-5" />
                                    <span>View Applications</span>
                                </button>
                                <button className="bg-purple-50 text-purple-700 py-4 rounded-xl font-semibold hover:bg-purple-100 transition-all duration-200 flex items-center justify-center space-x-2">
                                    <IconMessage className="h-5 w-5" />
                                    <span>Message Inbox</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CandidateProfile;