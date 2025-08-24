
import React from 'react';
import { LOGO_URL } from '../constants';

interface HeaderProps {
  onTestDriveClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTestDriveClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
             <a href="/" aria-label="Beranda Suzuki">
                <img src={LOGO_URL} alt="Suzuki Logo" className="h-12" />
            </a>
            <span className="hidden sm:inline text-xl font-bold text-suzuki-blue tracking-wider">Suzuki Bandung</span>
          </div>
          <nav>
            <button
              onClick={onTestDriveClick}
              className="bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 ease-in-out"
            >
              Jadwalkan Test Drive
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;