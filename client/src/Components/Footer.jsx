import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 relative   fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          &copy; {currentYear} Your Company Name
        </div>
        <div className="flex space-x-4">
          {/* Facebook Icon */}
          <a href="#" className="text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0  24  24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18  2h-3a5  5  0  00-5  5v3H7v4h3v8h4v-8h3l1-4h-4V7a1  1  0  011-1h3z" />
            </svg>
          </a>
          {/* Twitter Icon */}
          <a href="#" className="text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0  24  24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23  3a10.9  10.9  0  01-3.14  1.53  4.48  4.48  0  00-7.86  3v1A10.66  10.66  0  013  4s-4  9  5  13a11.64  11.64  0  01-7  2c9  5  20  0  20-11.5a4.5  4.5  0  00-.08-.83A7.72  7.72  0  0023  3z" />
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="#" className="text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0  24  24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12  2v16m6-16l-4  4-4-4" />
            </svg>
          </a>
          {/* LinkedIn Icon */}
          <a href="#" className="text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0  24  24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4  8h16M4  12h16M4  16h16" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
