
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-suzuki-blue text-white">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Suzuki Bandung. All rights reserved.</p>
        <p className="text-sm text-blue-200 mt-1">Website by Citra Ratna Sari</p>
      </div>
    </footer>
  );
};

export default Footer;
