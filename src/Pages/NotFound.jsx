import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50 text-gray-800 font-sans">
      <div className='block'>
          <img
              src="/404.png" // Fixed path here!
              alt="404 Page Not Found" 
              className='w-72 h-auto object-cover opacity-50'
          />
          <p className='text-sm '> Error 404: Free Time Missing, Organizer.exe still running </p>
      </div>
      
      {/* Call to Action Button */}
      <Link 
        to="/" 
        className="px-6 py-3 text-base font-semibold  rounded-lg transition-colors duration-200 ease-in-out mt-8"
      >
        Return to Home
      </Link>
      
    </div>
  );
};