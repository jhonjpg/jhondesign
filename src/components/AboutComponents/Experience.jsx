import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => setIsOpen((prev) => !prev);

  return (
    <section className="w-11/12 p-4  flex max-w-2xl">
      {/* Left Side - Title */}
      <aside
        onClick={toggleSection}
        className="w-10/12 md:w-1/3 mt-28 flex flex-col justify-start items-start cursor-pointer"
      >
        <motion.h4
          animate={{
            rotate: isOpen ? [0, 90, 85, 90] : [90, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white text-6xl pt-30  font-bold origin-center"
        >
          Experience-
        </motion.h4>
      </aside>

      {/* Right Side - Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3 flex flex-col gap-6 bg-zinc-900/50 p-4 text-white"
          >
            <div className="w-full">
              <h3 className="text-2xl font-bold"> Full Stack Developer</h3>
              <p className="text-sm text-gray-300">Freelance / Remote</p>
              <p className="text-sm text-gray-400">2022 – Present</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-200 space-y-1">
                <li>Developed responsive websites using HTML, CSS, JavaScript, React, and Tailwind CSS.</li>
                <li>Debugged UI issues across multiple browsers and screen sizes using browser dev tools.</li>
                <li>Integrated REST APIs and displayed dynamic content using fetch and async/await logic.</li>
                <li>Worked with GitHub for version control and collaborative projects.</li>
                <li>Optimized website performance by reducing image sizes, using lazy loading, and minimizing code.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Cemento Cibao</h3>
              <p className="text-sm text-gray-300">Local Startup · Santiago</p>
              <p className="text-sm text-gray-400">Jan 2021 – Jul 2022</p>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-200 space-y-1">
                <li>Assisted in building user interfaces using Bootstrap and jQuery.</li>
                <li>Wrote and maintained clean, reusable code in JavaScript for UI interactions.</li>
                <li>Collaborated with senior developers to fix layout bugs and improve UX consistency.</li>
                <li>Participated in daily standups and learned Agile development workflows.</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
