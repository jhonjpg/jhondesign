import React, { useState,useRef } from 'react';
import { useTranslation } from 'react-i18next';

import GraphicDesign from '../components/ProyectsComponents/GraphicDesign';
import WebDesign from '../components/ProyectsComponents/WebDesign';
import { useScroll, useTransform, useSpring, useInView, motion, AnimatePresence } from "framer-motion";
import { ProyectDescription } from '../components/ProyectsComponents/ProyectDescription';



const Proyects = () => {
  const { t } = useTranslation();
  const [design, setDesign] = useState("web design");

  const sectionRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"] // section is fully on screen
});

  const scale = useTransform(scrollYProgress, [0, 0, 1], [1, 1, 0.9]);
  const smoothScale = useSpring(scale, { damping: 20, stiffness: 100 });

  const handleComponentClick = (componentName) => {
    setDesign(componentName);
  };

  // Animation variants for entering/exiting components
  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (

    <main className="w-full relative m-2 p-4">


    <motion.section id="proyects" className="bg-gray-900 w-full h-auto p-4 flex flex-col items-center gap-5"   
  ref={sectionRef}
  style={{ scale: smoothScale }}
>

<ProyectDescription/>

      {/* Animated Heading */}
      <motion.strong
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', bounce: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="wingle text-2xl w-72 text-blue-300 text-center"
      >
        {t('proyects.heading')}
      </motion.strong>

      <motion.strong
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', bounce: 0.3, duration: 1.2 }}
        viewport={{ once: true }}
        className="wingle text-5xl w-72 text-blue-500 text-center"
      >
        {t('proyects.proyect')}
      </motion.strong>

      <hr className="w-20 bg-blue-500" />

      {/* Tabs */}
      <div className="w-full flex justify-evenly items-center gap-5">
        <h2
          onClick={() => handleComponentClick('web design')}
          className={`w-72 p-4 text-center cursor-pointer transition-all duration-300 ${
            design === 'web design'
              ? 'bg-blue-500 text-white p-1'
              : 'bg-blue-950 text-white'
          }`}
        >
          WEB DESIGN
        </h2>

        <h2
          onClick={() => handleComponentClick('graphic design')}
          className={`w-72 p-4 text-center cursor-pointer transition-all duration-300 ${
            design === 'graphic design'
              ? 'bg-blue-500 text-white p-1'
              : 'bg-blue-950 text-white'
          }`}
        >
          GRAPHIC DESIGN
        </h2>
      </div>

      {/* Dynamic Component with AnimatePresence */}
      <div className="flex flex-col w-full items-center gap-4 relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {design === 'web design' && (
            <motion.div
              key="web"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <WebDesign />
            </motion.div>
          )}

          {design === 'graphic design' && (
            <motion.div
              key="graphic"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <GraphicDesign />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
    </main>
  );
};

export default Proyects;
