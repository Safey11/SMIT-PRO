import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-white transition duration-300 ease-in-out">Home</Link>
            <Link to="/about" className="mr-5 hover:text-white transition duration-300 ease-in-out">About</Link>
            <Link to="/services" className="mr-5 hover:text-white transition duration-300 ease-in-out">Services</Link>
            <Link to="/contact" className="mr-5 hover:text-white transition duration-300 ease-in-out">Contact</Link>
            <Link to="/team" className="mr-5 hover:text-white transition duration-300 ease-in-out">Team</Link>
            <Link to="/portfolio" className="mr-5 hover:text-white transition duration-300 ease-in-out">Portfolio</Link>
          </nav>
          <button className="inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0 text-white transition duration-300 ease-in-out">
            Get Started
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
