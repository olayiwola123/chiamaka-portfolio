import { motion } from "framer-motion";
import React from "react";
import before from '../assets/before.jpeg'
import after from '../assets/after.jpeg'

function MyWorkSection() {
  const projects = [
    {
      id: 1,
      title: "SoteriaCreationz Instagram Revamp",
      before: before,
      after: after,
    },
    {
      id: 2,
      title: "Content Strategy & Branding",
      before: before,
      after: after,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6" id="work">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">My Work</h2>
          <p className="text-lg lg:text-xl">
            Brand: <span className="font-semibold">SoteriaCreationz</span>
          </p>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            I noticed there wasn’t consistency on her Instagram page, so I created a content schedule to ensure regular posts every day. Now, her page has engaging posts, the right audience, and regular live sessions that build her brand's visibility and connections.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                  <h4 className="text-lg font-semibold text-gray-400 mb-2">Before</h4>
                  <img
                    src={project.before}
                    alt={`${project.title} Before`}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="w-full lg:w-3/2">
                  <h4 className="text-lg font-semibold text-gray-400 mb-2">After</h4>
                  <img
                    src={project.after}
                    alt={`${project.title} After`}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default MyWorkSection;
