import React from 'react';
import { BookOpenIcon, AwardIcon, TrendingUpIcon, StarIcon, ClockIcon, UserIcon } from 'lucide-react';
export function Training() {
  const courses = [{
    title: 'Full Stack Web Development',
    company: 'TechCorp Academy',
    duration: '12 weeks',
    price: '₹499',
    rating: 4.8,
    students: 1200,
    jobGuarantee: true,
    description: 'Learn end-to-end web development with modern technologies...'
  }, {
    title: 'Digital Marketing Fundamentals',
    company: 'Growth School',
    duration: '8 weeks',
    price: '₹299',
    rating: 4.6,
    students: 800,
    jobGuarantee: false,
    description: 'Master the basics of digital marketing and growth strategies...'
  }];
  return <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upskill Your Career
          </h1>
          <p className="text-xl text-gray-600">
            Learn in-demand skills with industry experts
          </p>
        </div>
        {/* Course Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <AwardIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-lg font-medium">
                Job Guarantee Programs
              </h3>
            </div>
            <p className="text-gray-600">
              Courses with guaranteed job placement assistance
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <BookOpenIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-lg font-medium">Micro Courses</h3>
            </div>
            <p className="text-gray-600">
              Short, focused courses starting at ₹99
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUpIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-lg font-medium">Company Programs</h3>
            </div>
            <p className="text-gray-600">
              Training programs sponsored by top companies
            </p>
          </div>
        </div>
        {/* Course Listings */}
        <div className="space-y-6">
          {courses.map((course, index) => <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-green-600">{course.company}</p>
                </div>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-gray-600">{course.rating}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{course.description}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center text-gray-500">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center text-gray-500">
                  <UserIcon className="h-5 w-5 mr-2" />
                  {course.students} students
                </div>
                {course.jobGuarantee && <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Job Guarantee
                  </span>}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">
                  ₹{course.price}
                </div>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                  Enroll Now
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}