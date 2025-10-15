// Talents.js
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
    IconUser,
    IconStar,
    IconMail,
    IconExternalLink
} from "@tabler/icons-react";
import Footer from '../components/HomePage/footer';
import Header from '../components/HomePage/header/header';

const Talents = () => {
    const [filters, setFilters] = useState({
        talentName: '',
        location: '',
        experience: '',
        role: '',
        minRate: '',
        skills: '',
        availability: ''
    });

    const [savedTalents, setSavedTalents] = useState(new Set());
    const [showFilters, setShowFilters] = useState(false);

    // Sample talents data
    const sampleTalents = [
        {
            id: 1,
            name: "Sarah Johnson",
            title: "Senior Frontend Developer",
            avatar: "/sarah-avatar.png",
            location: "San Francisco, California, USA",
            experience: "5+ years",
            rate: "$80 - $120/hr",
            availability: "Available immediately",
            responseTime: "Usually responds in 2 hours",
            description: "Passionate frontend developer with expertise in React, TypeScript, and modern web technologies. Love building scalable and user-friendly applications.",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Jest", "GraphQL"],
            rating: 4.9,
            projects: 47,
            verified: true
        },
        {
            id: 2,
            name: "Michael Chen",
            title: "Full Stack Developer",
            avatar: "/michael-avatar.png",
            location: "New York, NY",
            experience: "7+ years",
            rate: "$90 - $140/hr",
            availability: "Available in 2 weeks",
            responseTime: "Usually responds in 4 hours",
            description: "Full stack developer specializing in JavaScript ecosystems. Experienced in building end-to-end solutions for startups and enterprises.",
            skills: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
            rating: 4.8,
            projects: 63,
            verified: true
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
            responseTime: "Usually responds in 1 hour",
            description: "Creative designer focused on creating intuitive and beautiful user experiences. Strong background in user research and prototyping.",
            skills: ["Figma", "UI Design", "User Research", "Prototyping", "Design Systems", "Adobe Creative Suite"],
            rating: 4.9,
            projects: 38,
            verified: false
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
            responseTime: "Usually responds in 6 hours",
            description: "DevOps specialist with extensive experience in cloud infrastructure, CI/CD pipelines, and system architecture optimization.",
            skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux", "Python"],
            rating: 4.7,
            projects: 52,
            verified: true
        }
    ];

    // Repeat the sample talents to fill the page
    const talents = Array(12).fill(null).map((_, index) => ({
        ...sampleTalents[index % sampleTalents.length],
        id: index + 1
    }));

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const toggleSavedTalent = (talentId) => {
        setSavedTalents(prev => {
            const newSaved = new Set(prev);
            if (newSaved.has(talentId)) {
                newSaved.delete(talentId);
            } else {
                newSaved.add(talentId);
            }
            return newSaved;
        });
    };

    const clearFilters = () => {
        setFilters({
            talentName: '',
            location: '',
            experience: '',
            role: '',
            minRate: '',
            skills: '',
            availability: ''
        });
    };

    const filteredTalents = talents.filter(talent => {
        return (
            (!filters.talentName || talent.name.toLowerCase().includes(filters.talentName.toLowerCase()) || talent.title.toLowerCase().includes(filters.talentName.toLowerCase())) &&
            (!filters.location || talent.location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (!filters.experience || talent.experience === filters.experience) &&
            (!filters.role || talent.title.toLowerCase().includes(filters.role.toLowerCase())) &&
            (!filters.availability || talent.availability === filters.availability)
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
                            Find Top <span className="text-blue-600">Talents</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover skilled professionals from around the world. 
                            Filter by expertise, location, and availability to find your perfect match.
                        </p>
                    </div>

                    {/* Main Search Bar */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Talent Name or Role
                                </label>
                                <div className="relative">
                                    <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="e.g. React Developer"
                                        value={filters.talentName}
                                        onChange={(e) => handleFilterChange('talentName', e.target.value)}
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
                                    Experience Level
                                </label>
                                <select
                                    value={filters.experience}
                                    onChange={(e) => handleFilterChange('experience', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                >
                                    <option value="">All Levels</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="3-5 years">3-5 years</option>
                                    <option value="5+ years">5+ years</option>
                                    <option value="10+ years">10+ years</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Primary Role
                                </label>
                                <select
                                    value={filters.role}
                                    onChange={(e) => handleFilterChange('role', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                >
                                    <option value="">All Roles</option>
                                    <option value="Frontend">Frontend Developer</option>
                                    <option value="Backend">Backend Developer</option>
                                    <option value="Full Stack">Full Stack Developer</option>
                                    <option value="DevOps">DevOps Engineer</option>
                                    <option value="Designer">UX/UI Designer</option>
                                    <option value="Mobile">Mobile Developer</option>
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
                                    Search Talents
                                </button>
                            </div>
                        </div>

                        {/* Advanced Filters */}
                        {showFilters && (
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Minimum Hourly Rate
                                        </label>
                                        <div className="relative">
                                            <IconCurrencyDollar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                            <input
                                                type="number"
                                                placeholder="e.g. 50"
                                                value={filters.minRate}
                                                onChange={(e) => handleFilterChange('minRate', e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Availability
                                        </label>
                                        <select
                                            value={filters.availability}
                                            onChange={(e) => handleFilterChange('availability', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                        >
                                            <option value="">All</option>
                                            <option value="Available immediately">Available immediately</option>
                                            <option value="Available in 2 weeks">Available in 2 weeks</option>
                                            <option value="Part-time available">Part-time available</option>
                                            <option value="Full-time available">Full-time available</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Skills
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. React, Node.js"
                                            value={filters.skills}
                                            onChange={(e) => handleFilterChange('skills', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Talents Results */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Results Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {filteredTalents.length} Talents Found
                        </h2>
                        <p className="text-gray-600">
                            Based on your search criteria
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                            <option>Sort by: Most Relevant</option>
                            <option>Sort by: Highest Rated</option>
                            <option>Sort by: Most Experience</option>
                            <option>Sort by: Lowest Rate</option>
                        </select>
                    </div>
                </div>

                {/* Talents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTalents.map((talent) => (
                        <div key={talent.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                            <div className="p-6 flex flex-col h-full">
                                {/* Talent Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                                            <IconUser className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-gray-900 text-lg truncate" title={talent.name}>
                                                    {talent.name}
                                                </h3>
                                                {talent.verified && (
                                                    <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-gray-600 truncate" title={talent.title}>
                                                {talent.title}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleSavedTalent(talent.id)}
                                        className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors duration-200 ml-2"
                                    >
                                        {savedTalents.has(talent.id) ? (
                                            <IconHeartFilled className="h-6 w-6 text-red-500" />
                                        ) : (
                                            <IconHeart className="h-6 w-6" />
                                        )}
                                    </button>
                                </div>

                                {/* Rating and Projects */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <IconStar className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium text-gray-900">{talent.rating}</span>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {talent.projects} projects
                                    </div>
                                    <div className="text-sm text-green-600 font-medium">
                                        {talent.experience}
                                    </div>
                                </div>

                                {/* Talent Details */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconMapPin className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm truncate" title={talent.location}>{talent.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconCurrencyDollar className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm truncate" title={talent.rate}>{talent.rate}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-green-600">
                                        <IconBriefcase className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm font-medium">{talent.availability}</span>
                                    </div>
                                </div>

                                {/* Response Time */}
                                <div className="flex items-center gap-2 text-blue-600 mb-4">
                                    <IconClock className="h-4 w-4 flex-shrink-0" />
                                    <span className="text-sm">{talent.responseTime}</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {talent.description}
                                </p>

                                {/* Skills Tags */}
                                <div className={`flex flex-wrap gap-2 mb-4 ${talent.skills.length > 0 ? 'min-h-[32px]' : 'min-h-0'}`}>
                                    {talent.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto pt-4">
                                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-center flex items-center justify-center gap-2">
                                        <IconMail className="h-4 w-4" />
                                        Message
                                    </button>
                                    <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all duration-200 whitespace-nowrap flex items-center gap-2">
                                        <IconExternalLink className="h-4 w-4" />
                                        Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {filteredTalents.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="bg-white text-blue-600 border border-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                            Load More Talents
                        </button>
                    </div>
                )}

                {/* No Results State */}
                {filteredTalents.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconSearch className="h-10 w-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No talents found</h3>
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

export default Talents;