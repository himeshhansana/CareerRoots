import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserIcon, LockIcon, MailIcon, BriefcaseIcon, GithubIcon } from 'lucide-react';
export function Signup() {
  const [userType, setUserType] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signup attempt:', {
      userType,
      ...formData
    });
  };
  return <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/" className="flex justify-center text-green-600 text-3xl font-bold">
            Career<span className="text-green-800">Roots</span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </Link>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="mb-6">
              <div className="flex space-x-4">
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className={`flex-1 py-2 px-4 rounded-md ${userType === 'jobseeker' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`} onClick={() => setUserType('jobseeker')}>
                  <UserIcon className="h-5 w-5 inline-block mr-2" />
                  Job Seeker
                </motion.button>
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className={`flex-1 py-2 px-4 rounded-md ${userType === 'employer' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`} onClick={() => setUserType('employer')}>
                  <BriefcaseIcon className="h-5 w-5 inline-block mr-2" />
                  Employer
                </motion.button>
              </div>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="name" name="name" type="text" required className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="password" name="password" type="password" required className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.password} onChange={e => setFormData({
                  ...formData,
                  password: e.target.value
                })} />
                </div>
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="confirm-password" name="confirm-password" type="password" required className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.confirmPassword} onChange={e => setFormData({
                  ...formData,
                  confirmPassword: e.target.value
                })} />
                </div>
              </div>
              <div className="flex items-center">
                <input id="accept-terms" name="accept-terms" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" checked={formData.acceptTerms} onChange={e => setFormData({
                ...formData,
                acceptTerms: e.target.checked
              })} />
                <label htmlFor="accept-terms" className="ml-2 block text-sm text-gray-900">
                  I accept the{' '}
                  <a href="#" className="text-green-600 hover:text-green-500">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <div>
                <motion.button whileHover={{
                scale: 1.01
              }} whileTap={{
                scale: 0.99
              }} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Create Account
                </motion.button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <motion.div whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                  <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <div className="h-5 w-5" />
                  </a>
                </motion.div>
                <motion.div whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                  <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <GithubIcon className="h-5 w-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>;
}