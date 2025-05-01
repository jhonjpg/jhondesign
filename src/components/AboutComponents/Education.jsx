import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => setIsOpen((prev) => !prev);

  return (
    <section className="flex w-full h-auto  min-h-3xl justify-start items-start gap-6 p-4 px-4">
      {/* Left Side - Title */}
      <aside
        onClick={toggleSection}
        className="w-1/3 mt-28 flex flex-col justify-start items-start cursor-pointer"
      >
        <motion.h4
          animate={{
            rotate: isOpen ? [0, 90, 85, 90] : [90, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white text-6xl font-bold origin-center"
        >
          Education-
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
            className="w-2/3 flex flex-col gap-6 text-white"
          >
          <div>
  <h3 className="text-2xl font-bold">Software Engineering – 7th Semester</h3>
  <p className="text-sm text-gray-300">Universidad Tecnológica de Santiago (UTESA) · Dominican Republic</p>
  <p className="text-sm text-gray-400">2014 – 2019</p>
</div>


            <div>
              <h3 className="text-2xl font-bold">Frontend Development Certificate</h3>
              <p className="text-sm text-gray-300">freeCodeCamp / Codecademy / Udemy (Self-Taught)</p>
              <p className="text-sm text-gray-400">2020 – 2021</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">High School Diploma</h3>
              <p className="text-sm text-gray-300">Colegio Utesiano</p>
              <p className="text-sm text-gray-400">Graduated: 2013</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
