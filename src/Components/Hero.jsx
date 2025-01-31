// import { motion } from "framer-motion";
// import React from "react";
// import chiamake from '../assets/chiamaka.png';
// function Hero() {
//     return (
//         <section className="relative h-screen flex items-center bg-cover bg-[url('https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Round-Up-Featured-Image.jpg')]">

//             <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

//             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">

//                 <motion.div
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="text-white max-w-lg text-center md:text-left"
//                 >
//                     <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
//                         Hello! I'm Chiamaka
//                     </h2>
//                     <p className="text-lg sm:text-xl md:text-2xl mb-8">
//                         Social Media Manager | Content Creator
//                     </p>
//                     <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
//                         <a
//                             href={('../public/Nwabuchecv.pdf')}
//                             target="_blank"
//                             className="bg-[#ffd7be] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#ffd7be] text-white"
//                         >
//                             Download CV
//                         </a>
//                         <a
//                             href="#contact"
//                             className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[#ffd7be] "
//                         >
//                             Contact Me
//                         </a>
//                     </div>
//                 </motion.div>
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="mt-10 md:mt-0 md:ml-10"
//                 >
//                     <img
//                         src={chiamake}
//                         alt="Chiamaka Illustration"
//                         className="w-full max-w-xs sm:max-w-sm md:max-w-lg rounded-2xl shadow-lg object-cover"
//                     />
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

// export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import chiamake from '../assets/chiamaka.png';

function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-cover bg-[url('https://images.unsplash.com/photo-1620799140408-edc61ecb3abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>
            
            {/* Content Container */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-12 space-y-8 md:space-y-0">
                {/* Illustration Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden md:block"
                >
                    <img
                        src={chiamake}
                        alt="Chiamaka Illustration"
                        className="w-full max-w-md rounded-full shadow-2xl object-cover"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-white max-w-lg text-center md:text-left"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
                        Hello! I'm Chiamaka
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        Social Media Manager | Content Creator
                    </p>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
                        <a
                            href="/path/to/your/cv.pdf"
                            target="_blank"
                            className="bg-[#ffd7be] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#ffbf80] text-black"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[#ffd7be]"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Mobile Illustration Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="md:hidden"
                >
                    <img
                        src={chiamake}
                        alt="Chiamaka Illustration"
                        className="w-full max-w-md rounded-full shadow-2xl object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;