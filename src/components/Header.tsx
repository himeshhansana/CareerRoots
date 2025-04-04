import headerimg from '../assets/headerimg.jpg';

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, SearchIcon, BriefcaseIcon, UserIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navLinks = [{
    name: 'Find Jobs',
    path: '/jobs'
  }, {
    name: 'Internships',
    path: '/internships'
  }, {
    name: 'Training',
    path: '/training'
  }, {
    name: 'For Employers',
    path: '/employers'
  }];
  return <header className="bg-white shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-green-600">
                Career<span className="text-green-800">Roots</span>
              </Link>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-3 py-2 text-sm font-medium ${location.pathname === link.path ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
                  {link.name}
                </Link>)}
            </nav>
          </div>
          <div className="items-center hidden space-x-4 md:flex">
            <Link to="/login" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-green-600">
              <UserIcon className="w-4 h-4 mr-1" />
              Log In
            </Link>
            <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
              Sign Up
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-green-600 focus:outline-none">
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`block px-3 py-2 text-base font-medium ${location.pathname === link.path ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>)}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-3">
              <Link to="/login" className="flex-1 px-4 py-2 text-sm font-medium text-center text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                Log In
              </Link>
              <Link to="/signup" className="flex-1 px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-md hover:bg-green-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>}
      {isHomePage && <div className="px-4 pt-16 pb-24 bg-gradient-to-r from-green-50 to-emerald-50 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="md:flex md:items-center md:justify-between">
              <div className="space-y-6 md:w-1/2">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                  Plant Your Career
                  <span className="block text-green-600">
                    Grow from Intern to Professional
                  </span>
                </h1>
                <p className="max-w-3xl text-lg text-gray-600">
                  CareerRoots helps you navigate your career journey with
                  personalized pathways, skill-based matching, and growth
                  opportunities at every stage.
                </p>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link to="/jobs" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700">
                    <SearchIcon className="w-5 h-5 mr-2" />
                    Find Jobs
                  </Link>
                  <Link to="/employers" className="inline-flex items-center px-6 py-3 text-base font-medium text-green-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-50">
                    <BriefcaseIcon className="w-5 h-5 mr-2" />
                    Post Jobs
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/2">
                <img src={headerimg} alt="Career growth illustration" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>}
    </header>;
}