import React from 'react';
import { UsersIcon, BarChartIcon, BuildingIcon, CheckIcon } from 'lucide-react';
export function Employers() {
  const plans = [{
    name: 'Starter',
    price: '₹9,999',
    period: 'per month',
    description: 'Perfect for small businesses',
    features: ['Post up to 5 jobs', 'Basic candidate filtering', 'Email support', 'Standard job listing']
  }, {
    name: 'Growth',
    price: '₹24,999',
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
  return <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Hire the Best Talent
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Access a pool of pre-screened candidates and build your talent
            pipeline
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-green-50">
            Get Started
          </button>
        </div>
      </div>
      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <UsersIcon className="h-6 w-6 text-green-600" />
              <h3 className="ml-3 text-lg font-medium">Talent Pipeline</h3>
            </div>
            <p className="text-gray-600">
              Build and manage your talent pool from interns to full-time
              employees
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <BarChartIcon className="h-6 w-6 text-green-600" />
              <h3 className="ml-3 text-lg font-medium">Assessment Tools</h3>
            </div>
            <p className="text-gray-600">
              Evaluate candidates with custom skill assessments and video
              interviews
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <BuildingIcon className="h-6 w-6 text-green-600" />
              <h3 className="ml-3 text-lg font-medium">Campus Connect</h3>
            </div>
            <p className="text-gray-600">
              Connect with top colleges and universities for campus recruitment
            </p>
          </div>
        </div>
        {/* Pricing Plans */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => <div key={index} className={`bg-white rounded-lg shadow-sm p-8 ${plan.popular ? 'ring-2 ring-green-600' : ''}`}>
              {plan.popular && <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
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