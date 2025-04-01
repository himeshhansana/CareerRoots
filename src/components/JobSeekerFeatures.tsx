import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, BookOpenIcon, RocketIcon } from 'lucide-react';
export function JobSeekerFeatures() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            For Job Seekers
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tools to grow your career
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to find opportunities and develop your skills
          </p>
        </motion.div>
        <motion.div className="mt-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[{
            icon: <SearchIcon className="h-6 w-6" />,
            title: 'Internship/Job Search',
            features: ['Advanced filters: Remote/On-site, Stipend/Paid, Duration', '"No Experience Required" section for freshers', 'Personalized job recommendations based on your profile']
          }, {
            icon: <BookOpenIcon className="h-6 w-6" />,
            title: 'Training Marketplace',
            features: ['Company-sponsored training programs with job guarantees', 'Affordable micro-courses (₹99-499) for in-demand skills', 'Skill certifications that employers actually recognize']
          }, {
            icon: <RocketIcon className="h-6 w-6" />,
            title: 'Career Launchpad',
            features: ['Step-by-step guides: "How to land your first internship"', 'Virtual career fairs with instant interviews', 'Resume builder with AI-powered optimization']
          }].map((section, index) => <motion.div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow" variants={itemVariants} whileHover={{
            y: -5
          }} transition={{
            duration: 0.2
          }}>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  {section.icon}
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">
                  {section.title}
                </h3>
                <div className="mt-4 space-y-3">
                  {section.features.map((feature, featureIndex) => <motion.div key={featureIndex} className="flex items-start" initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1 + featureIndex * 0.1
              }}>
                      <div className="flex-shrink-0">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        </div>
                      </div>
                      <p className="ml-3 text-base text-gray-500">{feature}</p>
                    </motion.div>)}
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
}