import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50 text-gray-800 font-sans">
      <div className='block'>
                          <img
                              src={404} 
                              alt="44" 
                              className='w-full h-auto object-cover opacity-50'
                          />
                      </div>
      
      {/* Call to Action Button */}
      <Link 
        to="/" 
        className="px-6 py-3 text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-colors duration-200 ease-in-out"
      >
        Return to Home
      </Link>
      
    </div>
  );
};