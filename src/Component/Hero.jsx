import React from 'react';
import { motion } from 'framer-motion';

// Replace with the actual image URL you choose
const heroImage = "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero-section bg-cover bg-center h-screen flex items-center justify-center text-white text-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello! I'm Chiamaka</h1>
        <p className="text-lg md:text-xl">Social Media Manager | Content Creator</p>
        <a href="/cv.pdf" download className="mt-6 inline-block bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600">Download CV</a>
      </div>
    </motion.section>
  );
};

export default Hero;