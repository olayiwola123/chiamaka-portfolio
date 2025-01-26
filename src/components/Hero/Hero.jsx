import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import hero1 from "../../assets/hero2.jpg";
import hero2 from "../../assets/lagos.jpg";

const slides = [
  {
    id: 1,
    backgroundImage: hero1,
    title: "Empowering Your Future with Trusted Certifications",
    description:
      "we provide a secure and accessible platform where you can submit requests, monitor application statuses, and download your certificates with ease",
    primaryLink: "/sign-up",
    secondaryLink: "/about-us",
  },
  {
    id: 2,
    backgroundImage: hero2,
    title: "Welcome to the Lagos Certificate Portal",
    description:
      "The Lagos Certificate Portal serves as a comprehensive platform for residents to easily request and manage their vital certificates, including birth, marriage, and death registrations.",
    primaryLink: "/sign-up",
    secondaryLink: "/about-us",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { backgroundImage, title, description, primaryLink, secondaryLink } =
    slides[currentSlide];

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out pt-24"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <Fade key={currentSlide}>
            <h1 className="text-3xl font-extrabold sm:text-4xl text-white">
              <strong className="block font-extrabold text-tertiary">
                {title}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              {description}
            </p>
          </Fade>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href={primaryLink}
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto transition-opacity duration-1000 ease-in-out"
            >
              Get Started
            </a>

            <a
              href={secondaryLink}
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-primary sm:w-auto transition-opacity duration-1000 ease-in-out"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
