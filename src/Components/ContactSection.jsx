import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage("");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">Let's Work Together</h2>
          <p className="text-gray-600 mt-4">Contact me to start your next project or collaboration.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <FaInstagram className="text-pink-500 mr-4" size={24} />
                <a href="https://www.instagram.com/the_digital_deborah?igsh=ZTllOWl3cXl3eXV1&utm_source=qr" className="hover:text-pink-500">
                  @_debby.nina
                </a>
              </li>
              <li className="flex items-center text-gray-700">
                <FaWhatsapp className="text-green-500 mr-4" size={24} />
                <a href="https://wa.me/07030121795" className="hover:text-green-500">
                  +234 7030121795
                </a>
              </li>
              <li className="flex items-center text-gray-700">
                <FaPhone className="text-gray-500 mr-4" size={24} />
                <span>+234 7030121795</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaEnvelope className="text-gray-500 mr-4" size={24} />
                <a href="mailto:Chnwabuche@gmail.com" className="hover:text-gray-900">
                  Chnwabuche@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-4 py-2 rounded-lg border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-lg border-gray-300 px-4 py-2  shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="mt-1 block w-full px-4 py-2 rounded-lg border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submission Status */}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#ffd7be] text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-400"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
