import React, { useRef } from 'react';
import jhon from '../../assets/photo/jhon2.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const InfoAboutMe = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "start 20%"]
});

  // Transiciones para el section
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["100%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ borderRadius, scale, opacity }}
      className="w-full conic-gray-bg  p-4 max-w-6xl mx-auto my-12 overflow-hidden"
    >
      <aside className="w-40 h-40 ml-4 float-left flex items-center md:w-1/4 mb-4 sm:mb-0 sm:mr-4">
        <img
          src={jhon}
          alt="jhon"
          className="w-full h-full object-cover grayscale-100 rounded-full"
        />
      </aside>

      <article className="w-full float-top">
        <p className="text-lg text-white mb-4">{t('aboutMe.description0')}</p>
        <p className="text-lg text-white mb-4">{t('aboutMe.description1')}</p>
      </article>

      <a
        href="../src/assets/items/Jonathan-Resume.pdf"
        download
        className="inline-block px-20 mx-30 py-3 bg-zinc-900 text-white rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out"
      >
        Download Resume
      </a>
    </motion.section>
  );
};
