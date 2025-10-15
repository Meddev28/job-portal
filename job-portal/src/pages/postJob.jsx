// PostJob.js
import React, { useState } from 'react';
import { 
    IconArrowLeft,
    IconBuilding,
    IconBriefcase,
    IconMapPin,
    IconCurrencyDollar,
    IconTags,
    IconFileDescription,
    IconSend,
    IconX,
    IconPlus,
    IconStar,
    IconClock
} from "@tabler/icons-react";
import Footer from '../components/HomePage/footer';
import Header from '../components/HomePage/header/header';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const PostJob = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        company: '',
        experience: '',
        jobType: '',
        location: '',
        salary: '',
        skills: [],
        jobDescription: ''
    });
    
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [currentSkill, setCurrentSkill] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Validation schema
    const validationSchema = Yup.object({
        jobTitle: Yup.string()
            .required('Job title is required')
            .min(5, 'Job title must be at least 5 characters')
            .max(100, 'Job title must be less than 100 characters'),
        company: Yup.string()
            .required('Company name is required')
            .min(2, 'Company name must be at least 2 characters')
            .max(50, 'Company name must be less than 50 characters'),
        experience: Yup.string()
            .required('Experience level is required'),
        jobType: Yup.string()
            .required('Job type is required'),
        location: Yup.string()
            .required('Location is required')
            .min(2, 'Location must be at least 2 characters'),
        salary: Yup.string()
            .required('Salary is required'),
        skills: Yup.array()
            .min(1, 'At least one skill is required')
            .max(10, 'Maximum 10 skills allowed'),
        jobDescription: Yup.string()
            .required('Job description is required')
            .min(100, 'Job description must be at least 100 characters')
            .max(5000, 'Job description must be less than 5000 characters')
    });

    const experienceOptions = [
        'Intern',
        'Entry-level',
        'Mid-level',
        'Senior',
        'Lead',
        'Principal'
    ];

    const jobTypeOptions = [
        'Full-time',
        'Part-time',
        'Contract',
        'Internship',
        'Temporary',
        'Remote'
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const handleBlur = (field) => {
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));
        validateField(field, formData[field]);
    };

    const validateField = async (field, value) => {
        try {
            await validationSchema.fields[field].validate(value);
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        } catch (error) {
            setErrors(prev => ({
                ...prev,
                [field]: error.message
            }));
        }
    };

    const validateForm = async () => {
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});
            return true;
        } catch (error) {
            const newErrors = {};
            error.inner.forEach(err => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
            return false;
        }
    };

    const handleAddSkill = () => {
        if (currentSkill.trim() && formData.skills.length < 10) {
            const newSkill = currentSkill.trim();
            if (!formData.skills.includes(newSkill)) {
                setFormData(prev => ({
                    ...prev,
                    skills: [...prev.skills, newSkill]
                }));
                setCurrentSkill('');
                setErrors(prev => ({
                    ...prev,
                    skills: ''
                }));
            }
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill !== skillToRemove)
        }));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

    const handleTextFormat = (format) => {
        const textarea = document.getElementById('jobDescription');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = formData.jobDescription.substring(start, end);
        
        let formattedText = '';
        
        switch (format) {
            case 'bold':
                formattedText = `**${selectedText}**`;
                break;
            case 'italic':
                formattedText = `*${selectedText}*`;
                break;
            case 'underline':
                formattedText = `__${selectedText}__`;
                break;
            case 'bullet':
                formattedText = `• ${selectedText}`;
                break;
            case 'heading':
                formattedText = `# ${selectedText}`;
                break;
            case 'code':
                formattedText = `\`${selectedText}\``;
                break;
            default:
                formattedText = selectedText;
        }
        
        const newDescription = formData.jobDescription.substring(0, start) + 
                             formattedText + 
                             formData.jobDescription.substring(end);
        
        handleInputChange('jobDescription', newDescription);
        
        // Restore cursor position
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start, start + formattedText.length);
        }, 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const isValid = await validateForm();
        if (isValid) {
            // Simulate API call
            setTimeout(() => {
                console.log('Job posted:', formData);
                setIsSubmitting(false);
                setIsSubmitted(true);
            }, 2000);
        } else {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <Header />
                
                {/* Success Message */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <IconSend className="h-10 w-10 text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Posted Successfully!</h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                            Your job listing for <span className="font-semibold text-blue-600">{formData.jobTitle}</span> has been published and is now visible to potential candidates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/jobs"
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
                            >
                                View All Jobs
                            </Link>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-all duration-200"
                            >
                                Post Another Job
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header />
            
            {/* Back Navigation */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link to="/jobs" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                        <IconArrowLeft className="h-5 w-5 mr-2" />
                        Back to Jobs
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a New Job</h1>
                        <p className="text-gray-600">Fill in the details below to create your job listing</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Job Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Job Title *
                            </label>
                            <div className="relative">
                                <IconBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    value={formData.jobTitle}
                                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                                    onBlur={() => handleBlur('jobTitle')}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                        errors.jobTitle ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                    placeholder="e.g. Senior Frontend Developer"
                                />
                            </div>
                            {errors.jobTitle && (
                                <p className="mt-1 text-sm text-red-600">{errors.jobTitle}</p>
                            )}
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Company Name *
                            </label>
                            <div className="relative">
                                <IconBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => handleInputChange('company', e.target.value)}
                                    onBlur={() => handleBlur('company')}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                        errors.company ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                    placeholder="e.g. TechCorp International"
                                />
                            </div>
                            {errors.company && (
                                <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                            )}
                        </div>

                        {/* Experience & Job Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Experience */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Experience Level *
                                </label>
                                <select
                                    value={formData.experience}
                                    onChange={(e) => handleInputChange('experience', e.target.value)}
                                    onBlur={() => handleBlur('experience')}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                        errors.experience ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select experience level</option>
                                    {experienceOptions.map(level => (
                                        <option key={level} value={level}>{level}</option>
                                    ))}
                                </select>
                                {errors.experience && (
                                    <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
                                )}
                            </div>

                            {/* Job Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Job Type *
                                </label>
                                <select
                                    value={formData.jobType}
                                    onChange={(e) => handleInputChange('jobType', e.target.value)}
                                    onBlur={() => handleBlur('jobType')}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                        errors.jobType ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select job type</option>
                                    {jobTypeOptions.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.jobType && (
                                    <p className="mt-1 text-sm text-red-600">{errors.jobType}</p>
                                )}
                            </div>
                        </div>

                        {/* Location & Salary */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Location */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Location *
                                </label>
                                <div className="relative">
                                    <IconMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        value={formData.location}
                                        onChange={(e) => handleInputChange('location', e.target.value)}
                                        onBlur={() => handleBlur('location')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                            errors.location ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                        placeholder="e.g. San Francisco, CA or Remote"
                                    />
                                </div>
                                {errors.location && (
                                    <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                                )}
                            </div>

                            {/* Salary */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Salary Range *
                                </label>
                                <div className="relative">
                                    <IconCurrencyDollar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        value={formData.salary}
                                        onChange={(e) => handleInputChange('salary', e.target.value)}
                                        onBlur={() => handleBlur('salary')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                            errors.salary ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                        placeholder="e.g. $80,000 - $120,000"
                                    />
                                </div>
                                {errors.salary && (
                                    <p className="mt-1 text-sm text-red-600">{errors.salary}</p>
                                )}
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Required Skills *
                            </label>
                            <div className="space-y-3">
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <IconTags className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <input
                                            type="text"
                                            value={currentSkill}
                                            onChange={(e) => setCurrentSkill(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                            placeholder="Add a skill (e.g. React, Python, etc.)"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleAddSkill}
                                        className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2"
                                    >
                                        <IconPlus className="h-5 w-5" />
                                        <span>Add</span>
                                    </button>
                                </div>
                                
                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2 min-h-12">
                                    {formData.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center space-x-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                                        >
                                            <span>{skill}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveSkill(skill)}
                                                className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                                            >
                                                <IconX className="h-4 w-4" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                
                                {errors.skills && (
                                    <p className="mt-1 text-sm text-red-600">{errors.skills}</p>
                                )}
                                <p className="text-sm text-gray-500">
                                    {formData.skills.length}/10 skills added. Press Enter or click Add to include a skill.
                                </p>
                            </div>
                        </div>

                        {/* Job Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Job Description *
                            </label>
                            
                            {/* Text Formatting Toolbar */}
                            <div className="flex flex-wrap gap-1 mb-3 p-3 bg-gray-50 rounded-lg border">
                                <button
                                    type="button"
                                    onClick={() => handleTextFormat('bold')}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
                                    title="Bold"
                                >
                                    <strong>B</strong>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleTextFormat('italic')}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm italic hover:bg-gray-100 transition-colors duration-200"
                                    title="Italic"
                                >
                                    I
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleTextFormat('underline')}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm underline hover:bg-gray-100 transition-colors duration-200"
                                    title="Underline"
                                >
                                    U
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleTextFormat('heading')}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
                                    title="Heading"
                                >
                                    H
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleTextFormat('bullet')}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition-colors duration-200"
                                    title="Bullet Point"
                                >
                                    •
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleTextFormat('code')}
                                    className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-mono hover:bg-gray-100 transition-colors duration-200"
                                    title="Code"
                                >
                                    {`</>`}
                                </button>
                            </div>

                            <div className="relative">
                                <IconFileDescription className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                                <textarea
                                    id="jobDescription"
                                    value={formData.jobDescription}
                                    onChange={(e) => handleInputChange('jobDescription', e.target.value)}
                                    onBlur={() => handleBlur('jobDescription')}
                                    rows={12}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none ${
                                        errors.jobDescription ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                    placeholder="Describe the job responsibilities, requirements, and what makes your company great to work for..."
                                />
                            </div>
                            {errors.jobDescription && (
                                <p className="mt-1 text-sm text-red-600">{errors.jobDescription}</p>
                            )}
                            <div className="flex justify-between text-sm text-gray-500 mt-1">
                                <span>Minimum 100 characters</span>
                                <span>{formData.jobDescription.length}/5000</span>
                            </div>

                            {/* Formatting Help */}
                            <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-700">
                                    <strong>Formatting tips:</strong> Use the toolbar above to format your text. 
                                    You can also use Markdown: **bold**, *italic*, `code`, # heading, • bullet points.
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-12 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg hover:shadow-xl"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Posting Job...</span>
                                    </>
                                ) : (
                                    <>
                                        <IconSend className="h-5 w-5" />
                                        <span>Post Job</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PostJob;