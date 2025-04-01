import React from 'react';
import { SearchIcon, MapPinIcon, GraduationCapIcon, ClockIcon } from 'lucide-react';
export function Internships() {
  const internships = [{
    title: 'Software Development Intern',
    company: 'TechStart',
    duration: '3 months',
    stipend: '₹15,000/month',
    location: 'Bangalore',
    type: 'Full-time',
    requirements: 'Basic knowledge of programming',
    description: 'Join our development team and learn modern web technologies...'
  }, {
    title: 'Marketing Intern',
    company: 'GrowthCo',
    duration: '6 months',
    stipend: '₹12,000/month',
    location: 'Remote',
    type: 'Part-time',
    requirements: 'No experience required',
    description: 'Learn digital marketing strategies hands-on...'
  }];
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your Career Journey
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect internship to kickstart your career
          </p>
        </div>
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" placeholder="Internship title or keyword" className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>
            <div className="relative">
              <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" placeholder="Location" className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 flex items-center justify-center">
              <SearchIcon className="h-5 w-5 mr-2" />
              Find Internships
            </button>
          </div>
        </div>
        {/* Featured Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            No Experience Required
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, index) => <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {internship.title}
                  </h3>
                  <p className="text-green-600 font-medium mb-4">
                    {internship.company}
                  </p>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    {internship.location}
                  </div>
                  <div className="flex items-center">
                    <GraduationCapIcon className="h-5 w-5 mr-2" />
                    {internship.requirements}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 text-sm mb-4">
                    {internship.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">
                      {internship.stipend}
                    </span>
                    <button className="bg-green-100 text-green-700 px-4 py-2 rounded-md text-sm hover:bg-green-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}