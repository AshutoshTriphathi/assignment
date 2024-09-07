import React from 'react';
import Aboutme from './Components/Aboutme';
import Gallary from './Components/Gallary';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Empty left half for larger screens */}
      <div className="hidden md:flex md:w-1/2"></div>

      {/* Right side containing the widgets */}
      <div className="w-full md:w-1/2 p-8">
        <Aboutme />
        <Gallary />
      </div>
    </div>
  );
}

export default App;