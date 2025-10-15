// components/JobCard.js
import React from 'react';
import { 
    IconMapPin, 
    IconBriefcase, 
    IconCurrencyDollar,
    IconHeart,
    IconHeartFilled,
    IconBuilding,
    IconUsers,
    IconClock
} from "@tabler/icons-react";

const JobCard = ({ job, isSaved, onToggleSave, onApply, onViewDetails }) => {
    // Safe access to job properties with fallbacks
    const {
        id,
        title = 'No Title',
        company = 'Unknown Company',
        location = 'Location not specified',
        type = 'Not specified',
        experience = 'Not specified',
        salary = 'Salary not specified',
        applicants = 0,
        posted = 'Recently',
        skills = [] // Default to empty array if skills is undefined
    } = job || {};

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
            <div className="p-6 flex flex-col h-full">
                {/* Job Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                            <IconBuilding className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-gray-900 text-lg truncate" title={title}>
                                {title}
                            </h3>
                            <p className="text-gray-600 truncate" title={company}>
                                {company}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => onToggleSave(id)}
                        className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors duration-200 ml-2"
                    >
                        {isSaved ? (
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
                        <span className="text-sm truncate" title={location}>{location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <IconBriefcase className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm">{type} • {experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <IconCurrencyDollar className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm truncate" title={salary}>{salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <IconUsers className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm">{applicants} applicants</span>
                    </div>
                </div>

                {/* Posted Time */}
                <div className="flex items-center gap-2 text-green-600 mb-4">
                    <IconClock className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{posted}</span>
                </div>

                {/* Skills Tags - Now safely handles undefined skills */}
                <div className={`flex flex-wrap gap-2 mb-4 ${skills.length > 0 ? 'min-h-[32px]' : 'min-h-0'}`}>
                    {skills.map((skill, index) => (
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
                    <button 
                        onClick={() => onApply(id)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-center"
                    >
                        Apply Now
                    </button>
                    <button 
                        onClick={() => onViewDetails(id)}
                        className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all duration-200 whitespace-nowrap"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;