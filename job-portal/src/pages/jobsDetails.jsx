// JobDetails.js
import React, { useState } from 'react';
import { 
    IconMapPin, 
    IconBriefcase, 
    IconClock, 
    IconCurrencyDollar,
    IconHeart,
    IconHeartFilled,
    IconBuilding,
    IconUsers,
    IconCalendar,
    IconCheck,
    IconArrowLeft,
    IconShare,
    IconExternalLink,
    IconStar,
    IconUser,
    IconClockHour4,
    IconWorld
} from "@tabler/icons-react";
import Footer from '../components/HomePage/footer';
import Header from '../components/HomePage/header/header';
import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
    const [isSaved, setIsSaved] = useState(false);
    const [isApplied, setIsApplied] = useState(false);
    const { id } = useParams();

    // Sample job data - in real app, you'd fetch this based on the ID
    const job = {
        id: 1,
        title: "Senior Frontend Developer with React and TypeScript",
        company: "TechCorp International Inc.",
        logo: "/techcorp-logo.png",
        location: "San Francisco, California, USA",
        type: "Full-time",
        experience: "Senior",
        salary: "$120,000 - $150,000",
        applicants: 24,
        posted: "2 days ago",
        remote: "Remote",
        skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Jest", "GraphQL", "Node.js"],
        
        // Detailed job information
        description: "We are looking for an experienced Frontend Developer to join our team and help build amazing user experiences. You'll work on cutting-edge projects using modern technologies and collaborate with a talented team of engineers and designers.",
        
        fullDescription: `
            <p>TechCorp International is seeking a highly skilled Senior Frontend Developer to join our dynamic team. In this role, you will be responsible for developing and maintaining high-quality web applications that serve millions of users worldwide.</p>
            
            <h3>What You'll Do:</h3>
            <ul>
                <li>Develop and maintain responsive web applications using React and TypeScript</li>
                <li>Collaborate with UX/UI designers to implement pixel-perfect designs</li>
                <li>Write clean, maintainable, and efficient code following best practices</li>
                <li>Participate in code reviews and provide constructive feedback</li>
                <li>Optimize applications for maximum speed and scalability</li>
                <li>Mentor junior developers and contribute to team knowledge sharing</li>
            </ul>

            <h3>What We Offer:</h3>
            <ul>
                <li>Competitive salary and comprehensive benefits package</li>
                <li>Flexible working hours and remote work options</li>
                <li>Professional development budget and learning opportunities</li>
                <li>Modern tech stack and cutting-edge tools</li>
                <li>Collaborative and inclusive work environment</li>
            </ul>
        `,
        
        requirements: [
            "5+ years of professional frontend development experience",
            "Strong proficiency in React, TypeScript, and modern JavaScript",
            "Experience with state management libraries (Redux, Zustand)",
            "Knowledge of testing frameworks (Jest, React Testing Library)",
            "Familiarity with modern build tools and CI/CD pipelines",
            "Excellent problem-solving and communication skills",
            "Bachelor's degree in Computer Science or related field (preferred)"
        ],
        
        benefits: [
            "Health, dental, and vision insurance",
            "401(k) with company matching",
            "Unlimited PTO and flexible holidays",
            "Remote work stipend",
            "Professional development budget",
            "Stock options",
            "Team building events and company retreats"
        ],
        
        companyInfo: {
            name: "TechCorp International Inc.",
            description: "TechCorp is a leading technology company specializing in enterprise software solutions. We've been revolutionizing the industry for over 10 years with our innovative products and services.",
            size: "1000-5000 employees",
            industry: "Technology & Software Development",
            website: "https://techcorp.example.com",
            founded: "2013",
            rating: 4.5,
            reviews: 1247
        },
        
        applicationProcess: [
            "Initial screening call (30 minutes)",
            "Technical interview (60 minutes)",
            "Take-home assignment (3-4 hours)",
            "Final interview with team leads (90 minutes)",
            "Offer decision within 3 business days"
        ]
    };

    // Similar jobs data
    const similarJobs = [
        {
            id: 2,
            title: "React Developer",
            company: "InnovateLabs",
            location: "New York, NY",
            type: "Full-time",
            experience: "Mid-level",
            salary: "$90,000 - $120,000",
            applicants: 18,
            posted: "1 day ago",
            remote: "Hybrid",
            skills: ["React", "JavaScript", "CSS"]
        },
        {
            id: 3,
            title: "Frontend Engineer",
            company: "WebSolutions Inc.",
            location: "Remote",
            type: "Contract",
            experience: "Senior",
            salary: "$100,000 - $140,000",
            applicants: 32,
            posted: "3 days ago",
            remote: "Remote",
            skills: ["React", "TypeScript", "Next.js"]
        },
        {
            id: 4,
            title: "UI Developer",
            company: "DesignTech",
            location: "Austin, TX",
            type: "Full-time",
            experience: "Mid-level",
            salary: "$85,000 - $110,000",
            applicants: 15,
            posted: "5 hours ago",
            remote: "On-site",
            skills: ["React", "CSS", "Figma"]
        }
    ];

    const handleApply = () => {
        setIsApplied(true);
        // In real app, you would handle the application process here
    };

    const visitCompanyWebsite = () => {
        // In real app, this would open the company website
        window.open(job.companyInfo.website, '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header />
            
            {/* Back Navigation */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link to="/jobs" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                        <IconArrowLeft className="h-5 w-5 mr-2" />
                        Back to Jobs
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Job Content */}
                    <div className="lg:col-span-2">
                        {/* Job Header Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm">
                                        <IconBuilding className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                                        <div className="flex items-center space-x-4 mb-3">
                                            <p className="text-xl text-blue-600 font-semibold">{job.company}</p>
                                            <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                                                <IconStar className="h-4 w-4 fill-current" />
                                                <span className="text-sm font-medium">{job.companyInfo.rating}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                                            <div className="flex items-center space-x-1">
                                                <IconMapPin className="h-5 w-5" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <IconBriefcase className="h-5 w-5" />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <IconUsers className="h-5 w-5" />
                                                <span>{job.applicants} applicants</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                        <IconShare className="h-6 w-6" />
                                    </button>
                                    <button 
                                        onClick={() => setIsSaved(!isSaved)}
                                        className="p-3 text-gray-400 hover:text-red-500 transition-colors duration-200"
                                    >
                                        {isSaved ? (
                                            <IconHeartFilled className="h-6 w-6 text-red-500" />
                                        ) : (
                                            <IconHeart className="h-6 w-6" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-200">
                                <div className="text-center">
                                    <div className="flex items-center justify-center space-x-2 text-gray-600 mb-1">
                                        <IconCurrencyDollar className="h-5 w-5 text-green-500" />
                                        <span className="font-medium">Salary</span>
                                    </div>
                                    <p className="font-semibold text-gray-900">{job.salary}</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center space-x-2 text-gray-600 mb-1">
                                        <IconBriefcase className="h-5 w-5 text-blue-500" />
                                        <span className="font-medium">Experience</span>
                                    </div>
                                    <p className="font-semibold text-gray-900">{job.experience}</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center space-x-2 text-gray-600 mb-1">
                                        <IconClock className="h-5 w-5 text-purple-500" />
                                        <span className="font-medium">Remote</span>
                                    </div>
                                    <p className="font-semibold text-gray-900">{job.remote}</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center space-x-2 text-gray-600 mb-1">
                                        <IconCalendar className="h-5 w-5 text-orange-500" />
                                        <span className="font-medium">Posted</span>
                                    </div>
                                    <p className="font-semibold text-gray-900">{job.posted}</p>
                                </div>
                            </div>

                            {/* Skills Tags */}
                            <div className="pt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {job.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium hover:bg-blue-100 transition-colors duration-200 cursor-pointer"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Job Description */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h2>
                            <div 
                                className="prose prose-lg max-w-none text-gray-600"
                                dangerouslySetInnerHTML={{ __html: job.fullDescription }}
                            />
                        </div>

                        {/* Requirements */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                            <ul className="space-y-3">
                                {job.requirements.map((requirement, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <IconCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-600">{requirement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {job.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IconCheck className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Application Process */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
                            <div className="space-y-4">
                                {job.applicationProcess.map((step, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700">{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Company Info & Actions */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Apply Card - Not Sticky */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            {isApplied ? (
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconCheck className="h-8 w-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Sent!</h3>
                                    <p className="text-gray-600 mb-4">We've received your application and will review it shortly.</p>
                                    <button 
                                        onClick={() => setIsApplied(false)}
                                        className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200"
                                    >
                                        Edit Application
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Link to="/apply-job">
                                    <button
                                        
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl mb-4"
                                    >
                                        Apply Now
                                    </button>
                                    </Link>
                                    <div className="text-center text-sm text-gray-600 mb-6">
                                        <IconClockHour4 className="h-4 w-4 inline mr-1" />
                                        Apply in 5 minutes with your profile
                                    </div>
                                    
                                    <div className="space-y-3 text-sm mb-4">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Applications</span>
                                            <span className="font-semibold">{job.applicants}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Posted</span>
                                            <span className="font-semibold">{job.posted}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Job Type</span>
                                            <span className="font-semibold">{job.type}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Location</span>
                                            <span className="font-semibold">{job.remote}</span>
                                        </div>
                                    </div>

                                    {/* Company Website Button */}
                                    <button 
                                        onClick={visitCompanyWebsite}
                                        className="w-full bg-white border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 mt-4"
                                    >
                                        <IconWorld className="h-5 w-5" />
                                        <span>Company Website</span>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">About {job.companyInfo.name}</h3>
                            <p className="text-gray-600 text-sm mb-4">{job.companyInfo.description}</p>
                            
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Company Size</span>
                                    <span className="font-semibold">{job.companyInfo.size}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Industry</span>
                                    <span className="font-semibold">{job.companyInfo.industry}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Founded</span>
                                    <span className="font-semibold">{job.companyInfo.founded}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Rating</span>
                                    <span className="font-semibold flex items-center">
                                        <IconStar className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                        {job.companyInfo.rating} ({job.companyInfo.reviews} reviews)
                                    </span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={visitCompanyWebsite}
                                className="w-full mt-4 border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2"
                            >
                                <IconExternalLink className="h-4 w-4" />
                                <span>Visit Company Website</span>
                            </button>
                        </div>

                        {/* Similar Jobs */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Similar Jobs</h3>
                            <div className="space-y-4">
                                {similarJobs.map((similarJob) => (
                                    <div key={similarJob.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-200 border border-gray-200">
                                        <div className="flex items-start space-x-3 mb-3">
                                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                                                <IconBuilding className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                                                    {similarJob.title}
                                                </h4>
                                                <p className="text-gray-600 text-xs mb-2">{similarJob.company}</p>
                                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                                    <IconMapPin className="h-3 w-3" />
                                                    <span>{similarJob.location}</span>
                                                    <span>•</span>
                                                    <span>{similarJob.salary}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {similarJob.skills.slice(0, 2).map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex space-x-2">
                                            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-all duration-200">
                                                Apply
                                            </button>
                                            <Link to={`/job/${similarJob.id}`} className="flex-1">
                                                <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-xs font-semibold hover:border-gray-400 transition-all duration-200">
                                                    View
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

export default JobDetails;