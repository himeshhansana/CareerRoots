import React from 'react';
import { UsersIcon, BarChartIcon, BuildingIcon, CheckIcon } from 'lucide-react';
export function Employers() {
  const plans = [{
    name: 'Starter',
    price: '$9,999',
    period: 'per month',
    description: 'Perfect for small businesses',
    features: ['Post up to 5 jobs', 'Basic candidate filtering', 'Email support', 'Standard job listing']
  }, {
    name: 'Growth',
    price: '$24,999',
    period: 'per month',
    description: 'Best for growing companies',
    features: ['Post up to 15 jobs', 'Advanced candidate matching', 'Priority support', 'Featured job listings', 'Basic assessment tools'],
    popular: true
  }, {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per month',
    description: 'For large organizations',
    features: ['Unlimited job posts', 'AI-powered candidate matching', 'Dedicated account manager', 'Custom assessment tools', 'Branded career portal']
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Hire the Best Talent
          </h1>
          <p className="mb-8 text-xl text-green-100">
            Access a pool of pre-screened candidates and build your talent
            pipeline
          </p>
          <button className="px-8 py-3 text-lg font-medium text-green-700 bg-white rounded-md hover:bg-green-50">
            Get Started
          </button>
        </div>
      </div>
      {/* Features */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <UsersIcon className="w-6 h-6 text-green-600" />
              <h3 className="ml-3 text-lg font-medium">Talent Pipeline</h3>
            </div>
            <p className="text-gray-600">
              Build and manage your talent pool from interns to full-time
              employees
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <BarChartIcon className="w-6 h-6 text-green-600" />
              <h3 className="ml-3 text-lg font-medium">Assessment Tools</h3>
            </div>
            <p className="text-gray-600">
              Evaluate candidates with custom skill assessments and video
              interviews
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <BuildingIcon className="w-6 h-6 text-green-600" />
              <h3 className="ml-3 text-lg font-medium">Campus Connect</h3>
            </div>
            <p className="text-gray-600">
              Connect with top colleges and universities for campus recruitment
            </p>
          </div>
        </div>
        {/* Pricing Plans */}
        <h2 className="mb-12 text-3xl font-bold text-center">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => <div key={index} className={`bg-white rounded-lg shadow-sm p-8 ${plan.popular ? 'ring-2 ring-green-600' : ''}`}>
              {plan.popular && <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                  Most Popular
                </span>}
              <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>)}
              </ul>
              <button className={`w-full mt-8 px-4 py-2 rounded-md ${plan.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}>
                Get Started
              </button>
            </div>)}
        </div>
      </div>
    </div>;
}