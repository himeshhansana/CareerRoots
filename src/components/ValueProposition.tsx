import React from 'react';
import { TrendingUpIcon, BarChartIcon, AwardIcon, LayersIcon } from 'lucide-react';
export function ValueProposition() {
  return <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose CareerRoots?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our unique approach helps you grow your career systematically
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-green-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <TrendingUpIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  Career Growth Pathway
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Clear Progression
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Follow the proven path from Intern → Trainee → Associate →
                      Specialist
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Next Step Recommendations
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Personalized suggestions for your next career move based
                      on your profile
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <BarChartIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  Skill-Based Matching
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      AI Matching Algorithm
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Get matched to roles based on your skills, not just your
                      degrees or experience
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Skills Gap Analyzer
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Identify and bridge skill gaps with targeted training
                      recommendations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}