import React from 'react';
import aboutImage from '../../assets/about.png';
import { FaLeaf } from 'react-icons/fa';
import { Fade } from 'react-reveal';

const AboutSection = () => {
  return (
   <Fade right>
     <section className="py-16 bg-gray-100" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Lagos State Certificate Portal
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Lagos State Certificate Portal is dedicated to providing a
              secure, efficient, and user-friendly platform for managing
              certificates. Our mission is to empower citizens by simplifying
              the process of obtaining, verifying, and renewing various
              certificates, ensuring transparency and accessibility for all.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We are committed to leveraging technology to enhance the user
              experience, making it easier than ever to access essential
              services. Join us in building a brighter future through trusted
              certifications!
            </p>
            <a
              href="/services"
              className="bg-primary hover:bg-[#059669] text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Learn More 
            </a>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <img
              src={aboutImage}
              alt="About Lagos State Certificate Portal"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
   </Fade>
  );
};

export default AboutSection;
