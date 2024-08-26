import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
          <div className="mb-4 md:mb-0">&copy; {currentYear} Resume Builder</div>

        </div>
      </footer>
  );
};

export default Footer;
