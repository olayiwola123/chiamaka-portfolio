import React from 'react';

import { FaSchool } from 'react-icons/fa';
import { ArrowRightCircleIcon, CheckIcon } from '@heroicons/react/16/solid';
import { BiRefresh, BiSupport } from 'react-icons/bi';
import { Zoom } from 'react-reveal';

const services = [
  {
    id: 1,
    title: 'Certificate Issuance',
    description:
      'Obtain your official certificates quickly and securely through our streamlined issuance process.',
    icon: FaSchool,
    link: '/services/certificate-issuance',
  },
  {
    id: 2,
    title: 'Certificate Verification',
    description:
      'Verify the authenticity of certificates with ease, ensuring trust and reliability.',
    icon: CheckIcon,
    link: '/services/verification',
  },
  {
    id: 3,
    title: 'Certificate Renewal',
    description:
      'Renew your existing certificates effortlessly to keep them up-to-date.',
    icon: BiRefresh,
    link: '/services/renewal',
  },
  {
    id: 4,
    title: 'Customer Support',
    description:
      'Get assistance from our dedicated support team for any queries or issues.',
    icon: BiSupport,
    link: '/services/support',
  },
];

const Services = () => {
  return (
   <Zoom out>
     <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a range of services to manage your certificates efficiently and securely.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <service.icon className="h-12 w-12 text-[#1E3A8A] mb-4" aria-hidden="true" />
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* Learn More Button */}
              <a
                href={service.link}
                className="inline-flex items-center text-[#1E3A8A] font-medium hover:text-[#10B981] transition-colors duration-300"
              >
                Learn More
                <ArrowRightCircleIcon className="h-5 w-5 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
   </Zoom>
  );
};

export default Services;
