import React, { useState } from 'react';
import { SearchIcon, MapPinIcon, BriefcaseIcon, FilterIcon } from 'lucide-react';
export function FindJobs() {
  const [filters, setFilters] = useState({
    location: '',
    jobType: 'all',
    experience: 'all'
  });
  const jobs = [{
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    salary: '₹5,00,000 - ₹8,00,000',
    type: 'Full-time',
    experience: '1-3 years',
    description: "We're looking for a Frontend Developer with React experience..."
  }, {
    title: 'UX Designer',
    company: 'DesignLabs',
    location: 'Mumbai',
    salary: '₹6,00,000 - ₹9,00,000',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Join our creative team as a UX Designer...'
  }
  // Add more job listings as needed
  ];
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" placeholder="Job title or keyword" className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>
            <div className="relative">
              <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" placeholder="Location" className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 flex items-center justify-center">
              <SearchIcon className="h-5 w-5 mr-2" />
              Search Jobs
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <FilterIcon className="h-5 w-5 mr-2" />
                Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3" value={filters.jobType} onChange={e => setFilters({
                  ...filters,
                  jobType: e.target.value
                })}>
                    <option value="all">All Types</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience Level
                  </label>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3" value={filters.experience} onChange={e => setFilters({
                  ...filters,
                  experience: e.target.value
                })}>
                    <option value="all">All Levels</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {jobs.map((job, index) => <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <button className="bg-green-100 text-green-700 px-4 py-2 rounded-md text-sm hover:bg-green-200">
                      Apply Now
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-500">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <BriefcaseIcon className="h-5 w-5 mr-2" />
                      {job.type}
                    </div>
                  </div>
                  <div className="mt-4 text-gray-600">
                    <p>{job.description}</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-gray-500 text-sm">
                      {job.experience} experience
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-500 text-sm">{job.salary}</span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
}