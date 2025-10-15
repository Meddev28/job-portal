// Jobs.js
import React, { useState } from 'react';
import { 
    IconSearch, 
    IconMapPin, 
    IconBriefcase, 
    IconClock, 
    IconCurrencyDollar,
    IconHeart,
    IconHeartFilled,
    IconFilter,
    IconX,
    IconBuilding,
    IconUsers
} from "@tabler/icons-react";
import Footer from '../components/HomePage/footer';
import Header from '../components/HomePage/header/header';

const Jobs = () => {
    const [filters, setFilters] = useState({
        jobTitle: '',
        location: '',
        experience: '',
        jobType: '',
        minSalary: '',
        industry: '',
        remote: ''
    });

    const [savedJobs, setSavedJobs] = useState(new Set());
    const [showFilters, setShowFilters] = useState(false);

    // Sample jobs data
    const sampleJobs = [
        {
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
            description: "We are looking for an experienced Frontend Developer to join our team and help build amazing user experiences.",
            remote: "Remote",
            skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Jest"]
        },
        {
            id: 2,
            title: "Product Manager",
            company: "InnovateLabs",
            logo: "/innovatelabs-logo.png",
            location: "New York, NY",
            type: "Full-time",
            experience: "Mid-level",
            salary: "$90,000 - $120,000",
            applicants: 18,
            posted: "1 day ago",
            description: "Join our product team to drive innovation and create products that customers love.",
            remote: "Hybrid",
            skills: ["Product Strategy", "UX Research"]
        },
        {
            id: 3,
            title: "Data Scientist",
            company: "DataTech Solutions LLC",
            logo: "/datatech-logo.png",
            location: "Austin, TX",
            type: "Full-time",
            experience: "Mid-level",
            salary: "$100,000 - $130,000",
            applicants: 32,
            posted: "3 days ago",
            description: "Help us uncover insights and build predictive models that drive business decisions.",
            remote: "On-site",
            skills: ["Python", "ML"]
        },
        {
            id: 4,
            title: "UX/UI Designer",
            company: "CreativeMinds Design Studio",
            logo: "/creative-logo.png",
            location: "Remote Worldwide",
            type: "Contract",
            experience: "Junior",
            salary: "$60,000 - $80,000",
            applicants: 15,
            posted: "5 hours ago",
            description: "Create beautiful and intuitive designs for our digital products and platforms.",
            remote: "Remote",
            skills: ["Figma", "UI Design", "User Research", "Prototyping", "Wireframing", "Design Systems"]
        }
    ];

    // Repeat the sample jobs to fill the page
    const jobs = Array(12).fill(null).map((_, index) => ({
        ...sampleJobs[index % sampleJobs.length],
        id: index + 1
    }));

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const toggleSavedJob = (jobId) => {
        setSavedJobs(prev => {
            const newSaved = new Set(prev);
            if (newSaved.has(jobId)) {
                newSaved.delete(jobId);
            } else {
                newSaved.add(jobId);
            }
            return newSaved;
        });
    };

    const clearFilters = () => {
        setFilters({
            jobTitle: '',
            location: '',
            experience: '',
            jobType: '',
            minSalary: '',
            industry: '',
            remote: ''
        });
    };

    const filteredJobs = jobs.filter(job => {
        return (
            (!filters.jobTitle || job.title.toLowerCase().includes(filters.jobTitle.toLowerCase())) &&
            (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (!filters.experience || job.experience === filters.experience) &&
            (!filters.jobType || job.type === filters.jobType) &&
            (!filters.remote || job.remote === filters.remote)
        );
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header/>
            {/* Header Section */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Find Your <span className="text-blue-600">Dream Job</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover thousands of job opportunities from top companies. 
                            Filter by your preferences and apply to your perfect role.
                        </p>
                    </div>

                    {/* Main Search Bar */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Job Title
                                </label>
                                <div className="relative">
                                    <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="e.g. Software Engineer"
                                        value={filters.jobTitle}
                                        onChange={(e) => handleFilterChange('jobTitle', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Location
                                </label>
                                <div className="relative">
                                    <IconMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="e.g. New York"
                                        value={filters.location}
                                        onChange={(e) => handleFilterChange('location', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Experience
                                </label>
                                <select
                                    value={filters.experience}
                                    onChange={(e) => handleFilterChange('experience', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                >
                                    <option value="">All Levels</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Mid-level">Mid-level</option>
                                    <option value="Senior">Senior</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Job Type
                                </label>
                                <select
                                    value={filters.jobType}
                                    onChange={(e) => handleFilterChange('jobType', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                >
                                    <option value="">All Types</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                <IconFilter className="h-5 w-5" />
                                <span>More Filters</span>
                            </button>

                            <div className="flex gap-3">
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all duration-200 flex items-center gap-2"
                                >
                                    <IconX className="h-4 w-4" />
                                    Clear Filters
                                </button>
                                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl">
                                    <IconSearch className="h-5 w-5" />
                                    Search Jobs
                                </button>
                            </div>
                        </div>

                        {/* Advanced Filters */}
                        {showFilters && (
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Minimum Salary
                                        </label>
                                        <div className="relative">
                                            <IconCurrencyDollar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                            <input
                                                type="number"
                                                placeholder="e.g. 50000"
                                                value={filters.minSalary}
                                                onChange={(e) => handleFilterChange('minSalary', e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Remote Work
                                        </label>
                                        <select
                                            value={filters.remote}
                                            onChange={(e) => handleFilterChange('remote', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                        >
                                            <option value="">All</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="On-site">On-site</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Industry
                                        </label>
                                        <select
                                            value={filters.industry}
                                            onChange={(e) => handleFilterChange('industry', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                        >
                                            <option value="">All Industries</option>
                                            <option value="Technology">Technology</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="Education">Education</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Jobs Results */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Results Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {filteredJobs.length} Jobs Found
                        </h2>
                        <p className="text-gray-600">
                            Based on your search criteria
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                            <option>Sort by: Most Relevant</option>
                            <option>Sort by: Newest</option>
                            <option>Sort by: Salary High to Low</option>
                            <option>Sort by: Most Applicants</option>
                        </select>
                    </div>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                            <div className="p-6 flex flex-col h-full">
                                {/* Job Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                                            <IconBuilding className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-semibold text-gray-900 text-lg truncate" title={job.title}>
                                                {job.title}
                                            </h3>
                                            <p className="text-gray-600 truncate" title={job.company}>
                                                {job.company}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleSavedJob(job.id)}
                                        className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors duration-200 ml-2"
                                    >
                                        {savedJobs.has(job.id) ? (
                                            <IconHeartFilled className="h-6 w-6 text-red-500" />
                                        ) : (
                                            <IconHeart className="h-6 w-6" />
                                        )}
                                    </button>
                                </div>

                                {/* Job Details */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconMapPin className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm truncate" title={job.location}>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconBriefcase className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm">{job.type} • {job.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconCurrencyDollar className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm truncate" title={job.salary}>{job.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconUsers className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm">{job.applicants} applicants</span>
                                    </div>
                                </div>

                                {/* Posted Time */}
                                <div className="flex items-center gap-2 text-green-600 mb-4">
                                    <IconClock className="h-4 w-4 flex-shrink-0" />
                                    <span className="text-sm font-medium">{job.posted}</span>
                                </div>

                                {/* Skills Tags - Now with proper spacing */}
                                <div className={`flex flex-wrap gap-2 mb-4 ${job.skills.length > 0 ? 'min-h-[32px]' : 'min-h-0'}`}>
                                    {job.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons - Fixed spacing */}
                                <div className="flex gap-3 mt-auto pt-4">
                                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-center">
                                        Apply Now
                                    </button>
                                    <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all duration-200 whitespace-nowrap">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {filteredJobs.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="bg-white text-blue-600 border border-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                            Load More Jobs
                        </button>
                    </div>
                )}

                {/* No Results State */}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconSearch className="h-10 w-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                        <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                        <button
                            onClick={clearFilters}
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Jobs;