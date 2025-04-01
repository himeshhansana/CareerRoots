import React, { Children } from 'react';
import { motion } from 'framer-motion';
export function CallToAction() {
  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  return <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="lg:flex lg:items-center lg:justify-between" initial={{
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
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to grow your career?</span>
            <span className="block text-green-100">
              Join CareerRoots today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <motion.div className="inline-flex rounded-md shadow" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50">
                Sign up as Job Seeker
              </a>
            </motion.div>
            <motion.div className="ml-3 inline-flex rounded-md shadow" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-900">
                Sign up as Employer
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="mt-16 grid gap-8 md:grid-cols-3" variants={statsVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }}>
          {[{
          number: '5000+',
          label: 'Internships Posted'
        }, {
          number: '2500+',
          label: 'Companies Hiring'
        }, {
          number: '85%',
          label: 'Placement Rate'
        }].map((stat, index) => <motion.div key={index} className="bg-white bg-opacity-10 rounded-lg p-8 text-white" variants={statsVariants} whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.2
        }}>
              <motion.div className="text-4xl font-bold mb-2" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                {stat.number}
              </motion.div>
              <div className="text-green-100">{stat.label}</div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}