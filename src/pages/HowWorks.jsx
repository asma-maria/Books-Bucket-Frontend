import React from 'react'
import { FiUserPlus, FiSearch, FiCheckCircle } from 'react-icons/fi'; // Importing icons

export default function HowWorks() {
  return (
    <div>
<div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">
          Follow these simple steps to get started and make the most out of our website.
        </p>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <div className="text-blue-500 mb-4">
              <FiUserPlus className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sign Up</h3>
            <p className="text-gray-600">
              Create an account to access all the features and personalize your experience on our platform.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <div className="text-green-500 mb-4">
              <FiSearch className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Explore</h3>
            <p className="text-gray-600">
              Use the search and filter options to browse through our extensive list of services and resources.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <div className="text-purple-500 mb-4">
              <FiCheckCircle className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Get Started</h3>
            <p className="text-gray-600">
              Choose a service, customize it to your needs, and get started with just a few clicks. We're here to help!
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
