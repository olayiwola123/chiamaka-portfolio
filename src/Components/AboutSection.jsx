import { motion } from "framer-motion";
import React from "react";
import chiamake from '../assets/chiamaka.png';

function AboutSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center bg-white text-white py-16 px-6" id="about">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img
          src={chiamake}
          alt="About Me"
          className="rounded-lg shadow-2xl object-cover max-w-[300px] lg:max-w-[400px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-black"
      >
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
          About Me
        </h2>
        <p className="text-lg leading-relaxed">
          I am an experienced social media manager with over 3 years of
          experience in implementing and developing social media strategies,
          increasing brand awareness, and driving audience engagement. I excel
          in creating captivating content that resonates with audiences and
          drives results.
        </p>
        <ul className="mt-6 space-y-4">
          <li>
            ✅ <span className="font-semibold">Create Captivating Content:</span>{" "}
            Eye-catching visuals and compelling copy.
          </li>
          <li>
            ✅ <span className="font-semibold">Build Connections:</span> Nurture
            a loyal following and spark conversations.
          </li>
          <li>
            ✅ <span className="font-semibold">Drive Campaign Results:</span>{" "}
            Generate leads, boost sales, and increase website traffic.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

export default AboutSection;
