// TalentProfile.js
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
    IconMessage
} from "@tabler/icons-react";
import Footer from '../components/HomePage/footer';
import Header from '../components/HomePage/header/header';
import { Link } from 'react-router-dom';

const TalentProfile = () => {
    const [isSaved, setIsSaved] = useState(false);
    const [activeTab, setActiveTab] = useState('about');

    // Main talent data
    const talent = {
        id: 1,
        name: "Sarah Johnson",
        title: "Senior Frontend Developer",
        avatar: "/sarah-avatar.png",
        banner: "/profile-banner.jpg",
        location: "San Francisco, California, USA",
        experience: "5+ years",
        rate: "$80 - $120/hr",
        availability: "Available immediately",
        responseTime: "Usually responds in 2 hours",
        description: "Passionate frontend developer with expertise in React, TypeScript, and modern web technologies. I love building scalable and user-friendly applications that solve real-world problems.",
        longDescription: "I'm a passionate frontend developer with over 5 years of experience creating exceptional digital experiences. My expertise lies in React, TypeScript, and modern web technologies. I thrive in collaborative environments and enjoy solving complex problems with elegant solutions.",
        rating: 4.9,
        projects: 47,
        verified: true,
        languages: ["English (Native)", "Spanish (Professional)"],
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Jest", "GraphQL", "Node.js", "Git", "AWS", "Figma", "Agile Methodology"],
        email: "sarah.johnson@example.com",
        phone: "+1 (555) 123-4567"
    };

    // Experiences data
    const experiences = [
        {
            id: 1,
            company: "TechCorp Inc.",
            position: "Senior Frontend Developer",
            period: "2021 - Present",
            duration: "3 years",
            location: "San Francisco, CA",
            description: "Leading frontend development for multiple client projects, implementing modern React patterns and optimizing performance.",
            achievements: [
                "Improved application performance by 40% through code optimization",
                "Mentored 3 junior developers",
                "Led migration from legacy Angular to React"
            ]
        },
        {
            id: 2,
            company: "Digital Solutions LLC",
            position: "Frontend Developer",
            period: "2019 - 2021",
            duration: "2 years",
            location: "Remote",
            description: "Developed and maintained web applications using React and Vue.js for various clients.",
            achievements: [
                "Built 15+ client websites from scratch",
                "Implemented responsive designs for mobile-first approach",
                "Reduced load times by 60%"
            ]
        },
        {
            id: 3,
            company: "StartUp Innovations",
            position: "Junior Web Developer",
            period: "2018 - 2019",
            duration: "1 year",
            location: "Austin, TX",
            description: "Started my career building responsive websites and learning modern web technologies.",
            achievements: [
                "Developed company's main website",
                "Learned React and modern JavaScript",
                "Collaborated with design team on UX improvements"
            ]
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
        },
        {
            id: 3,
            name: "TypeScript Masterclass",
            issuer: "Microsoft",
            date: "2021",
            credential: "Credential ID: MS-TS-54321"
        },
        {
            id: 4,
            name: "Advanced JavaScript Concepts",
            issuer: "Google Developers",
            date: "2020",
            credential: "Credential ID: GD-JS-98765"
        }
    ];

    // Recommended talents
    const recommendedTalents = [
        {
            id: 2,
            name: "Michael Chen",
            title: "Full Stack Developer",
            avatar: "/michael-avatar.png",
            location: "New York, NY",
            experience: "7+ years",
            rate: "$90 - $140/hr",
            availability: "Available in 2 weeks",
            rating: 4.8,
            projects: 63,
            verified: true,
            skills: ["React", "Node.js", "Python", "PostgreSQL"]
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            title: "UX/UI Designer",
            avatar: "/emily-avatar.png",
            location: "Austin, TX",
            experience: "4+ years",
            rate: "$70 - $110/hr",
            availability: "Available immediately",
            rating: 4.9,
            projects: 38,
            verified: false,
            skills: ["Figma", "UI Design", "User Research", "Prototyping"]
        },
        {
            id: 4,
            name: "David Kim",
            title: "DevOps Engineer",
            avatar: "/david-avatar.png",
            location: "Remote Worldwide",
            experience: "6+ years",
            rate: "$100 - $150/hr",
            availability: "Part-time available",
            rating: 4.7,
            projects: 52,
            verified: true,
            skills: ["AWS", "Docker", "Kubernetes", "Terraform"]
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
                            {/* Avatar */}
                            <div className="relative">
                                <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                                    <div className="w-28 h-28 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                                        <IconUser className="h-12 w-12 text-blue-600" />
                                    </div>
                                </div>
                                {talent.verified && (
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                        <IconCheck className="h-4 w-4 text-white" />
                                    </div>
                                )}
                            </div>
                            
                            {/* Basic Info */}
                            <div className="text-white mb-6">
                                <h1 className="text-3xl font-bold mb-2">{talent.name}</h1>
                                <p className="text-xl opacity-90 mb-3">{talent.title}</p>
                                <div className="flex items-center space-x-6 text-sm">
                                    <div className="flex items-center space-x-1">
                                        <IconMapPin className="h-4 w-4" />
                                        <span>{talent.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <IconStar className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span>{talent.rating} ({talent.projects} projects)</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <IconBriefcase className="h-4 w-4" />
                                        <span>{talent.experience}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="absolute bottom-6 right-8 flex space-x-4">
                            <button
                                onClick={() => setIsSaved(!isSaved)}
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 backdrop-blur-sm"
                            >
                                {isSaved ? (
                                    <IconHeartFilled className="h-5 w-5 text-red-500" />
                                ) : (
                                    <IconHeart className="h-5 w-5" />
                                )}
                                <span>{isSaved ? 'Saved' : 'Save'}</span>
                            </button>
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2 shadow-lg">
                                <IconMail className="h-5 w-5" />
                                <span>Message</span>
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
                        {/* Contact Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconMail className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{talent.email}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconPhone className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{talent.phone}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconMapPin className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">{talent.location}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <IconGlobe className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">San Francisco Time (PST)</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats - Simple Clean Version */}
<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
    <h3 className="font-semibold text-gray-900 mb-6">Quick Stats</h3>
    <div className="space-y-5">
        <div>
            <div className="flex items-center space-x-3 mb-2">
                <IconCurrencyDollar className="h-5 w-5 text-blue-500" />
                <span className="text-gray-600 font-medium">Hourly Rate</span>
            </div>
            <p className="font-semibold text-gray-900 text-lg pl-8">{talent.rate}</p>
        </div>

        <div>
            <div className="flex items-center space-x-3 mb-2">
                <IconClock className="h-5 w-5 text-green-500" />
                <span className="text-gray-600 font-medium">Response Time</span>
            </div>
            <p className="font-semibold text-green-600 text-lg pl-8">{talent.responseTime}</p>
        </div>

        <div>
            <div className="flex items-center space-x-3 mb-2">
                <IconBriefcase className="h-5 w-5 text-purple-500" />
                <span className="text-gray-600 font-medium">Availability</span>
            </div>
            <p className="font-semibold text-green-600 text-lg pl-8">{talent.availability}</p>
        </div>

        <div>
            <div className="flex items-center space-x-3 mb-2">
                <IconAward className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600 font-medium">Success Rate</span>
            </div>
            <p className="font-semibold text-gray-900 text-lg pl-8">98%</p>
        </div>
    </div>
</div>
                        {/* Languages */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Languages</h3>
                            <div className="space-y-2">
                                {talent.languages.map((language, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-600">{language}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        {/* Navigation Tabs */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6">
                            <div className="flex border-b border-gray-200">
                                {['about', 'experience', 'certifications'].map((tab) => (
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
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3">About Me</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {talent.longDescription}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
                                            <div className="flex flex-wrap gap-3">
                                                {talent.skills.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200 cursor-pointer"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Experience Tab */}
                                {activeTab === 'experience' && (
                                    <div className="space-y-6">
                                        {experiences.map((exp) => (
                                            <div key={exp.id} className="border-l-2 border-blue-500 pl-6 pb-6 relative">
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
                                                            <IconAward className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-sm">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Certifications Tab */}
                                {activeTab === 'certifications' && (
                                    <div className="grid gap-4">
                                        {certifications.map((cert) => (
                                            <div key={cert.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
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
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Recommendations */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Similar Talents</h3>
                            <div className="space-y-4">
                                {recommendedTalents.map((recommendedTalent) => (
                                    <div key={recommendedTalent.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-200 border border-gray-200">
                                        <div className="flex items-start space-x-3 mb-3">
                                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                                                <IconUser className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-1 mb-1">
                                                    <h4 className="font-semibold text-gray-900 text-sm truncate">
                                                        {recommendedTalent.name}
                                                    </h4>
                                                    {recommendedTalent.verified && (
                                                        <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                                                            <IconCheck className="h-2 w-2 text-white" />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className="text-gray-600 text-xs truncate mb-1">{recommendedTalent.title}</p>
                                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                                    <IconStar className="h-3 w-3 text-yellow-400 fill-current" />
                                                    <span>{recommendedTalent.rating}</span>
                                                    <span>•</span>
                                                    <span>{recommendedTalent.experience}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {recommendedTalent.skills.slice(0, 3).map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                            {recommendedTalent.skills.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                                    +{recommendedTalent.skills.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex space-x-2">
                                            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-1">
                                                <IconMessage className="h-3 w-3" />
                                                <span>Message</span>
                                            </button>
                                            <Link to="/talent-profile" className="flex-1">
                                                <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-xs font-semibold hover:border-gray-400 transition-all duration-200 flex items-center justify-center space-x-1">
                                                    <IconExternalLink className="h-3 w-3" />
                                                    <span>Profile</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TalentProfile;