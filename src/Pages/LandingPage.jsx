// import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AboutSection from "../components/About/About";
import Services from "../components/Service/Service";
import Contact from "../components/Contact/Contact";
import Loader from "../components/Loader/Loader";
import { useEffect, useState } from "react";
import { FaMessage } from "react-icons/fa6";
// import Loader from "../components/Loader/Loader"; // Import the loader

const LandingPage = () => {
  const [loading, setLoading] = useState(true); // State for controlling loader

  useEffect(() => {
    // Simulate a delay for loading (e.g., API call, resource loading)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false when the page is ready
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  if (loading) {
    return <Loader />; // Show the loader while loading is true
  }

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Contact />
      <Footer />
{/* 
      <div className="fixed bottom-10 right-10 flex items-center">
        <FaMessage className="text-xl text-red-800 w-20 h-12"
      
        />
        </div> */}
    </main>

    
  );
};

export default LandingPage;
