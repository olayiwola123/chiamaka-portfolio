import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-pink-500 mb-4">About</h3>
          <p className="text-gray-300 leading-relaxed">
            Hi! I'm Debby Nina, a passionate creator with a love for design and
            creativity. Let's build something amazing together!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-pink-500 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="hover:text-pink-500">
                About Me
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-pink-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-pink-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-xl font-bold text-pink-500 mb-4">Subscribe</h3>
          <p className="text-gray-300 mb-4">
            Stay updated with my latest projects and offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Contact Details */}
      <div className="mt-12 border-t border-gray-700 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Social Contacts */}
          <div className="flex space-x-6 justify-center sm:justify-start">
            <a
              href="https://www.instagram.com/_debby.nina"
              className="text-pink-500 hover:text-pink-400"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/07030121795"
              className="text-green-500 hover:text-green-400"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="tel:+2347030121795"
              className="text-gray-300 hover:text-gray-100"
              aria-label="Phone"
            >
              <FaPhone size={24} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left text-gray-300">
            <p>
              <strong>Phone:</strong> +234 7030121795
            </p>
            <p>
              <strong>WhatsApp:</strong> +234 7030121795
            </p>
            <p>
              <strong>Email:</strong> Chnwabuche@gmail.com
            </p>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center sm:text-right">
            <p>
              &copy; {new Date().getFullYear()} Debby Nina. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
