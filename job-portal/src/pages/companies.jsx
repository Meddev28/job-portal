// Companies.js
import React, { useState } from 'react';
import { 
    IconSearch, 
    IconMapPin, 
    IconBuilding, 
    IconUsers, 
    IconStar,
    IconHeart,
    IconHeartFilled,
    IconFilter,
    IconX,
    IconBriefcase,
    IconCheck,
    IconWorld
} from "@tabler/icons-react";
import Footer from '../components/HomePage/footer';
import Header from '../components/HomePage/header/header';
import { Link } from 'react-router-dom';

const Companies = () => {
    const [filters, setFilters] = useState({
        companyName: '',
        location: '',
        industry: '',
        companySize: '',
        founded: ''
    });

    const [savedCompanies, setSavedCompanies] = useState(new Set());
    const [showFilters, setShowFilters] = useState(false);

    // Sample companies data
    const sampleCompanies = [
        {
            id: 1,
            name: "TechCorp International Inc.",
            tagline: "Innovating the Future of Technology",
            logo: "/techcorp-logo.png",
            location: "San Francisco, California, USA",
            industry: "Technology & Software Development",
            companySize: "1000-5000 employees",
            founded: "2015",
            rating: 4.8,
            reviews: 247,
            openJobs: 12,
            verified: true,
            description: "Leading technology company creating innovative software solutions that transform businesses worldwide.",
            specialities: ["Enterprise Software", "Cloud Computing", "AI & Machine Learning"],
            techStack: ["React", "TypeScript", "Node.js", "Python", "AWS"]
        },
        {
            id: 2,
            name: "InnovateLabs",
            tagline: "Building Tomorrow's Solutions Today",
            logo: "/innovatelabs-logo.png",
            location: "New York, NY",
            industry: "Technology & Innovation",
            companySize: "500-1000 employees",
            founded: "2018",
            rating: 4.6,
            reviews: 189,
            openJobs: 8,
            verified: true,
            description: "Pioneering innovative solutions for modern business challenges through cutting-edge technology.",
            specialities: ["Product Innovation", "Digital Transformation", "UX Research"],
            techStack: ["React", "Vue.js", "Node.js", "MongoDB"]
        },
        {
            id: 3,
            name: "DataTech Solutions LLC",
            tagline: "Transforming Data into Insights",
            logo: "/datatech-logo.png",
            location: "Austin, TX",
            industry: "Data & Analytics",
            companySize: "200-500 employees",
            founded: "2016",
            rating: 4.7,
            reviews: 156,
            openJobs: 6,
            verified: false,
            description: "Specialized in data analytics and machine learning solutions for enterprise clients.",
            specialities: ["Data Analytics", "Machine Learning", "Business Intelligence"],
            techStack: ["Python", "SQL", "TensorFlow", "Apache Spark"]
        },
        {
            id: 4,
            name: "CreativeMinds Design Studio",
            tagline: "Where Creativity Meets Technology",
            logo: "/creative-logo.png",
            location: "Remote Worldwide",
            industry: "Design & Creative",
            companySize: "50-200 employees",
            founded: "2019",
            rating: 4.9,
            reviews: 98,
            openJobs: 5,
            verified: true,
            description: "Award-winning design studio creating beautiful digital experiences for global brands.",
            specialities: ["UI/UX Design", "Brand Identity", "Digital Products"],
            techStack: ["Figma", "React", "Three.js", "WebGL"]
        },
        {
            id: 5,
            name: "CloudScale Technologies",
            tagline: "Scaling Your Digital Presence",
            logo: "/cloudscale-logo.png",
            location: "Seattle, WA",
            industry: "Cloud Computing",
            companySize: "1000-5000 employees",
            founded: "2014",
            rating: 4.5,
            reviews: 312,
            openJobs: 15,
            verified: true,
            description: "Enterprise cloud solutions provider helping businesses scale their digital infrastructure.",
            specialities: ["Cloud Migration", "DevOps", "Infrastructure"],
            techStack: ["AWS", "Kubernetes", "Docker", "Terraform"]
        },
        {
            id: 6,
            name: "HealthTech Innovations",
            tagline: "Revolutionizing Healthcare with Technology",
            logo: "/healthtech-logo.png",
            location: "Boston, MA",
            industry: "Healthcare Technology",
            companySize: "500-1000 employees",
            founded: "2017",
            rating: 4.8,
            reviews: 204,
            openJobs: 9,
            verified: true,
            description: "Transforming healthcare through innovative technology solutions and digital platforms.",
            specialities: ["HealthTech", "Telemedicine", "Medical Software"],
            techStack: ["React", "Node.js", "Python", "PostgreSQL"]
        }
    ];

    // Repeat the sample companies to fill the page
    const companies = Array(12).fill(null).map((_, index) => ({
        ...sampleCompanies[index % sampleCompanies.length],
        id: index + 1
    }));

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const toggleSavedCompany = (companyId) => {
        setSavedCompanies(prev => {
            const newSaved = new Set(prev);
            if (newSaved.has(companyId)) {
                newSaved.delete(companyId);
            } else {
                newSaved.add(companyId);
            }
            return newSaved;
        });
    };

    const clearFilters = () => {
        setFilters({
            companyName: '',
            location: '',
            industry: '',
            companySize: '',
            founded: ''
        });
    };

    const filteredCompanies = companies.filter(company => {
        return (
            (!filters.companyName || company.name.toLowerCase().includes(filters.companyName.toLowerCase())) &&
            (!filters.location || company.location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (!filters.industry || company.industry === filters.industry) &&
            (!filters.companySize || company.companySize === filters.companySize)
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
                            Explore Top <span className="text-blue-600">Companies</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover amazing companies to work for. Find your perfect cultural fit 
                            and explore career opportunities with industry leaders.
                        </p>
                    </div>

                    {/* Main Search Bar */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Company Name
                                </label>
                                <div className="relative">
                                    <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="e.g. TechCorp"
                                        value={filters.companyName}
                                        onChange={(e) => handleFilterChange('companyName', e.target.value)}
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
                                        placeholder="e.g. San Francisco"
                                        value={filters.location}
                                        onChange={(e) => handleFilterChange('location', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                    />
                                </div>
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
                                    <option value="Technology & Software Development">Technology</option>
                                    <option value="Technology & Innovation">Innovation</option>
                                    <option value="Data & Analytics">Data & Analytics</option>
                                    <option value="Design & Creative">Design & Creative</option>
                                    <option value="Cloud Computing">Cloud Computing</option>
                                    <option value="Healthcare Technology">Healthcare Technology</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Company Size
                                </label>
                                <select
                                    value={filters.companySize}
                                    onChange={(e) => handleFilterChange('companySize', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                >
                                    <option value="">All Sizes</option>
                                    <option value="1-50 employees">1-50 employees</option>
                                    <option value="50-200 employees">50-200 employees</option>
                                    <option value="200-500 employees">200-500 employees</option>
                                    <option value="500-1000 employees">500-1000 employees</option>
                                    <option value="1000-5000 employees">1000-5000 employees</option>
                                    <option value="5000+ employees">5000+ employees</option>
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
                                    Search Companies
                                </button>
                            </div>
                        </div>

                        {/* Advanced Filters */}
                        {showFilters && (
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Founded After
                                        </label>
                                        <div className="relative">
                                            <IconBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                            <input
                                                type="number"
                                                placeholder="e.g. 2010"
                                                value={filters.founded}
                                                onChange={(e) => handleFilterChange('founded', e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Minimum Rating
                                        </label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none">
                                            <option>Any Rating</option>
                                            <option>4.0+ Stars</option>
                                            <option>4.5+ Stars</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Remote Friendly
                                        </label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none">
                                            <option>All Companies</option>
                                            <option>Remote First</option>
                                            <option>Hybrid Available</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Companies Results */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Results Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {filteredCompanies.length} Companies Found
                        </h2>
                        <p className="text-gray-600">
                            Discover your next workplace
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                            <option>Sort by: Most Relevant</option>
                            <option>Sort by: Highest Rated</option>
                            <option>Sort by: Most Jobs</option>
                            <option>Sort by: Largest Company</option>
                        </select>
                    </div>
                </div>

                {/* Companies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCompanies.map((company) => (
                        <div key={company.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                            <div className="p-6 flex flex-col h-full">
                                {/* Company Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                                            <IconBuilding className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-semibold text-gray-900 text-lg truncate" title={company.name}>
                                                    {company.name}
                                                </h3>
                                                {company.verified && (
                                                    <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                        <IconCheck className="h-2 w-2 text-white" />
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-sm truncate" title={company.tagline}>
                                                {company.tagline}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleSavedCompany(company.id)}
                                        className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors duration-200 ml-2"
                                    >
                                        {savedCompanies.has(company.id) ? (
                                            <IconHeartFilled className="h-6 w-6 text-red-500" />
                                        ) : (
                                            <IconHeart className="h-6 w-6" />
                                        )}
                                    </button>
                                </div>

                                {/* Company Details */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconMapPin className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm truncate" title={company.location}>{company.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconBuilding className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm">{company.industry}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconUsers className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm">{company.companySize}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconBriefcase className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm">{company.openJobs} open positions</span>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                                    <IconStar className="h-4 w-4 flex-shrink-0 fill-current" />
                                    <span className="text-sm font-medium">{company.rating} ({company.reviews} reviews)</span>
                                </div>

                                {/* Specialities Tags */}
                                <div className={`flex flex-wrap gap-2 mb-4 ${company.specialities.length > 0 ? 'min-h-[32px]' : 'min-h-0'}`}>
                                    {company.specialities.slice(0, 3).map((speciality, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap"
                                        >
                                            {speciality}
                                        </span>
                                    ))}
                                    {company.specialities.length > 3 && (
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                            +{company.specialities.length - 3} more
                                        </span>
                                    )}
                                </div>

                                {/* Company Description */}
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                                    {company.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto pt-4">
                                    <Link to="/profile" className="flex-1">
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-center">
                                            View Company page
                                        </button>
                                    </Link>
                                    <Link to="/jobs">
                                        <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all duration-200 whitespace-nowrap">
                                            View Jobs
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {filteredCompanies.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="bg-white text-blue-600 border border-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                            Load More Companies
                        </button>
                    </div>
                )}

                {/* No Results State */}
                {filteredCompanies.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconBuilding className="h-10 w-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No companies found</h3>
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

export default Companies;