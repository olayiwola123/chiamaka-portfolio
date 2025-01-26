import React, { useState } from "react";
import { motion } from "framer-motion";

function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { id: 1, title: "Social Media Management", image: "https://via.placeholder.com/300?text=Certificate+1" },
    { id: 2, title: "Content Strategy Mastery", image: "https://via.placeholder.com/300?text=Certificate+2" },
    { id: 3, title: "Brand Development Expert", image: "https://via.placeholder.com/300?text=Certificate+3" },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">Certifications</h2>
          <p className="text-gray-600 mt-4">
            These certifications showcase my expertise and accomplishments in social media management, branding, and content strategy.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group relative bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="rounded-lg object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{certificate.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Full Certificate View */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full"
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="rounded-lg object-cover w-full mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              {selectedCertificate.title}
            </h3>
            <button
              onClick={() => setSelectedCertificate(null)}
              className="block mx-auto bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default CertificationsSection;
