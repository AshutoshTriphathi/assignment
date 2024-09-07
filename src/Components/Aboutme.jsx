import React, { useState } from 'react';

function AboutMe() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <div className="flex space-x-2">
        <button
          className={`px-3 py-1 rounded-full ${activeTab === 'about' ? 'bg-gray-600' : 'bg-gray-700'} hover:bg-gray-500`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`px-3 py-1 rounded-full ${activeTab === 'experiences' ? 'bg-gray-600' : 'bg-gray-700'} hover:bg-gray-500`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`px-3 py-1 rounded-full ${activeTab === 'recommended' ? 'bg-gray-600' : 'bg-gray-700'} hover:bg-gray-500`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="mt-4 text-sm">
        {activeTab === 'about' && (
          <p> Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
            <br/>
            I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</p>
        )}
        {activeTab === 'experiences' && (
          <p>Experience content goes here.</p>
        )}
        {activeTab === 'recommended' && (
          <p>Recommended content goes here.</p>
        )}
      </div>
    </div>
  );
}

export default AboutMe;