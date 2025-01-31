import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navsbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full z-50"
    >
      <h1 className="text-xl font-bold">Chiamaka's Portfolio</h1>
      <ul className="flex space-x-4">
        <li><Link to="#about" className="text-gray-700 hover:text-indigo-500">About</Link></li>
        <li><Link to="#portfolio" className="text-gray-700 hover:text-indigo-500">Portfolio</Link></li>
        <li><Link to="#services" className="text-gray-700 hover:text-indigo-500">Services</Link></li>
        <li><Link to="#contact" className="text-gray-700 hover:text-indigo-500">Contact</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navsbar;