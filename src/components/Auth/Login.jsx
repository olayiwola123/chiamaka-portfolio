
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Login() {
 

  return (
    <>
     
        <div className="min-h-screen flex items-center justify-center bg-white">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h2>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            >
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter your password"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-primary text-white p-3 rounded-lg font-bold hover:bg-purple-600 transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </motion.form>

            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-purple-500 font-semibold hover:underline">
                Sign up
              </a>
            </p>
          </motion.div>
        </div>
     
    </>
  );
}

export default Login;
