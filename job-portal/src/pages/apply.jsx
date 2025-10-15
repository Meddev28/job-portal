// ApplyJob.js
import React, { useState } from 'react';
import { 
    IconArrowLeft,
    IconBuilding,
    IconUser,
    IconMail,
    IconPhone,
    IconWorld,
    IconFileText,
    IconFileDescription,
    IconUpload,
    IconEdit,
    IconSend,
    IconCheck,
    IconClock,
    IconUsers,
    IconBriefcase,
    IconMapPin,
    IconX
} from "@tabler/icons-react";
import Footer from '../components/HomePage/footer';
import Header from '../components/HomePage/header/header';
import { Link, useParams } from 'react-router-dom';
import * as Yup from 'yup';

const ApplyJob = () => {
    const [isPreview, setIsPreview] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        website: '',
        coverLetter: ''
    });

    const { id } = useParams();

    // Sample job data
    const job = {
        id: 1,
        title: "Senior Frontend Developer with React and TypeScript",
        company: "TechCorp International Inc.",
        location: "San Francisco, California, USA",
        type: "Full-time",
        applicants: 24,
        posted: "2 days ago",
        salary: "$120,000 - $150,000"
    };

    // Validation schema
    const validationSchema = Yup.object({
        fullName: Yup.string()
            .required('Full name is required')
            .min(2, 'Full name must be at least 2 characters')
            .max(50, 'Full name must be less than 50 characters'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number format'),
        website: Yup.string()
            .url('Please enter a valid URL')
            .nullable(),
        coverLetter: Yup.string()
            .required('Cover letter is required')
            .min(50, 'Cover letter must be at least 50 characters')
            .max(2000, 'Cover letter must be less than 2000 characters')
    });

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

    const handleResumeChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setErrors(prev => ({
                    ...prev,
                    resume: 'File size must be less than 5MB'
                }));
                return;
            }
            if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
                setErrors(prev => ({
                    ...prev,
                    resume: 'Please upload a PDF or Word document'
                }));
                return;
            }
            setResumeFile(file);
            setErrors(prev => ({
                ...prev,
                resume: ''
            }));
        }
    };

    const removeResume = () => {
        setResumeFile(null);
    };

    const handlePreview = async () => {
        const isFormValid = await validateForm();
        if (!isFormValid || !resumeFile) {
            if (!resumeFile) {
                setErrors(prev => ({
                    ...prev,
                    resume: 'Resume is required'
                }));
            }
            return;
        }
        setIsPreview(true);
    };

    const handleEdit = () => {
        setIsPreview(false);
    };

    const handleSubmit = () => {
        // In real app, you would submit the application here
        console.log('Application submitted:', formData, resumeFile);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <Header />
                
                {/* Success Message */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <IconCheck className="h-10 w-10 text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                            Thank you for applying to the <span className="font-semibold text-blue-600">{job.title}</span> position at <span className="font-semibold">{job.company}</span>. We've received your application and will review it shortly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/jobs"
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
                            >
                                Browse More Jobs
                            </Link>
                            <Link 
                                to="/"
                                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-all duration-200"
                            >
                                Back to Home
                            </Link>
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
                    <Link to={`/job/${id}`} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                        <IconArrowLeft className="h-5 w-5 mr-2" />
                        Back to Job Details
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Job Header */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm">
                                <IconBuilding className="h-8 w-8 text-blue-600" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                                <p className="text-xl text-blue-600 font-semibold mb-3">{job.company}</p>
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
                                    <div className="flex items-center space-x-1">
                                        <IconClock className="h-5 w-5" />
                                        <span>Posted {job.posted}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {isPreview ? 'Review Your Application' : 'Apply for this Position'}
                        </h2>
                        <div className="text-sm text-gray-500">
                            Step {isPreview ? '2' : '1'} of 2
                        </div>
                    </div>

                    {!isPreview ? (
                        /* Application Form */
                        <div className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <IconUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                                        onBlur={() => handleBlur('fullName')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                            errors.fullName 
                                                ? 'border-red-300' 
                                                : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        onBlur={() => handleBlur('email')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                            errors.email 
                                                ? 'border-red-300' 
                                                : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <div className="relative">
                                    <IconPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        onBlur={() => handleBlur('phone')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                            errors.phone 
                                                ? 'border-red-300' 
                                                : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                )}
                            </div>

                            {/* Personal Website */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Personal Website or Portfolio
                                </label>
                                <div className="relative">
                                    <IconWorld className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="url"
                                        value={formData.website}
                                        onChange={(e) => handleInputChange('website', e.target.value)}
                                        onBlur={() => handleBlur('website')}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                                            errors.website 
                                                ? 'border-red-300' 
                                                : 'border-gray-300'
                                        }`}
                                        placeholder="https://yourwebsite.com"
                                    />
                                </div>
                                {errors.website && (
                                    <p className="mt-1 text-sm text-red-600">{errors.website}</p>
                                )}
                            </div>

                            {/* Resume/CV Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Resume/CV *
                                </label>
                                <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
                                    resumeFile 
                                        ? 'border-green-300 bg-green-50' 
                                        : errors.resume
                                        ? 'border-red-300 bg-red-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                }`}>
                                    {resumeFile ? (
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <IconFileText className="h-8 w-8 text-green-600" />
                                                <div className="text-left">
                                                    <p className="font-semibold text-green-700">{resumeFile.name}</p>
                                                    <p className="text-sm text-green-600">
                                                        {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={removeResume}
                                                className="text-red-500 hover:text-red-700 transition-colors duration-200"
                                            >
                                                <IconX className="h-5 w-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <IconUpload className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                                            <input
                                                type="file"
                                                onChange={handleResumeChange}
                                                accept=".pdf,.doc,.docx"
                                                className="hidden"
                                                id="resume-upload"
                                            />
                                            <label htmlFor="resume-upload" className="cursor-pointer">
                                                <span className="text-blue-600 font-semibold">Click to upload</span>
                                                <span className="text-gray-600"> or drag and drop</span>
                                            </label>
                                            <p className="text-sm text-gray-500 mt-1">
                                                PDF, DOC, DOCX up to 5MB
                                            </p>
                                        </>
                                    )}
                                </div>
                                {errors.resume && (
                                    <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
                                )}
                            </div>

                            {/* Cover Letter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Cover Letter *
                                </label>
                                <div className="relative">
                                    <IconFileDescription className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                                    <textarea
                                        value={formData.coverLetter}
                                        onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                                        onBlur={() => handleBlur('coverLetter')}
                                        rows={6}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none ${
                                            errors.coverLetter 
                                                ? 'border-red-300' 
                                                : 'border-gray-300'
                                        }`}
                                        placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
                                    />
                                </div>
                                {errors.coverLetter && (
                                    <p className="mt-1 text-sm text-red-600">{errors.coverLetter}</p>
                                )}
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    <span>Minimum 50 characters</span>
                                    <span>{formData.coverLetter.length}/2000</span>
                                </div>
                            </div>

                            {/* Preview Button */}
                            <div className="flex justify-end pt-6">
                                <button
                                    type="button"
                                    onClick={handlePreview}
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center space-x-2"
                                >
                                    <IconFileText className="h-5 w-5" />
                                    <span>Preview Application</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Preview Mode */
                        <div className="space-y-6">
                            {/* Application Preview */}
                            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Preview</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Full Name</label>
                                        <p className="text-gray-900 font-semibold">{formData.fullName}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Email</label>
                                        <p className="text-gray-900 font-semibold">{formData.email}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Phone</label>
                                        <p className="text-gray-900 font-semibold">{formData.phone}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600">Website</label>
                                        <p className="text-gray-900 font-semibold">{formData.website || 'Not provided'}</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">Resume</label>
                                    <p className="text-gray-900 font-semibold flex items-center space-x-2">
                                        <IconFileText className="h-4 w-4 text-blue-600" />
                                        <span>{resumeFile?.name}</span>
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">Cover Letter</label>
                                    <div className="bg-white rounded-lg p-4 mt-2 border">
                                        <p className="text-gray-700 whitespace-pre-wrap">{formData.coverLetter}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6">
                                <button
                                    onClick={handleEdit}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all duration-200 flex items-center space-x-2"
                                >
                                    <IconEdit className="h-5 w-5" />
                                    <span>Edit Application</span>
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-2"
                                >
                                    <IconSend className="h-5 w-5" />
                                    <span>Submit Application</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ApplyJob;