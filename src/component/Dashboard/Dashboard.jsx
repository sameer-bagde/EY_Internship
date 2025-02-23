import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Campaigns</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200">
            <img 
              src="/api/placeholder/400/200" 
              alt="Campaign" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Example Campaign
            </h3>
            <p className="text-gray-600 mb-4">
              A brief description of what this campaign is about and what it hopes to achieve.
            </p>
            <div className="space-y-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">$15,000 raised</span>
                <span className="text-gray-600">75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;