import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { LampDemo } from "../components/ServicesComponents/Lamp";

// Animation for headings
const bounceIn = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};


const bounceOn = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      type: "",
      stiffness: 300,
      damping: 10,
    },
  },
};

const Services = () => {
  const [activeBranch, setActiveBranch] = useState(0); // Not used yet

  const { t } = useTranslation();
  const services = t("servicesList", { returnObjects: true });

  const { scrollY } = useScroll();

  // Scroll-based animations
  const yText = useTransform(scrollY, [500, 590, 690], [0, 300, 600]);
  const fadeInCards = useTransform(scrollY, [500, 300], [0, 1]);
  const fadeInServices = useTransform(scrollY, [500, 700], [0, 1]);
  const slideInLeft = useTransform(scrollY, [500, 600], [300, 0]);
  const slideInRight = useTransform(scrollY, [500, 600], [-300, 0]);
  const scaleUp = useTransform(scrollY, [500, 600], [0.4, 1]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gray-900 w-full h-full p-4 flex flex-col items-center gap-5"
    >
      {/* Background Lamp */}
      <div className="w-80 md:w-screen absolute top-0 h-20">
        <LampDemo />
      </div>

      <div className="w-screen z-10 p-20 flex flex-col items-center gap-5">
        {/* Section Heading */}
        <motion.strong
          className="wingle text-2xl text-blue-300 w-72 text-center"
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
        >
          {t("services.servicios")}
        </motion.strong>

        <motion.strong
          className="wingle text-5xl text-blue-500 w-72 text-center mb-12"
          variants={bounceIn}
          initial="hidden"
          whileInView="visible"
        >
          {t("services.heading")}{" "}
          <span className="text-blue-700">{t("services.do")}</span>
        </motion.strong>

        {/* Services Grid */}
        <section className="w-full  px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const animationStyles = {
                  opacity:
                    index === 0 || index === 2 ? fadeInServices : 0,
                  x:
                    index === 0
                      ? slideInRight
                      : index === 2
                      ? slideInLeft
                      : 0,
                  scale: index === 1 ? scaleUp : 1,
                };

                return (
                  <motion.div
                    key={index}
                    className="conic-blue-bg flex flex-col items-center shadow-md rounded-2xl p-6 transition-transform hover:scale-105"
                    style={animationStyles}
                    variants={bounceOn}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <div className="w-full flex justify-center">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-24 h-24 object-cover mb-4 rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {t(service.title)}
                    </h3>
                    <p className="text-gray-200">
                      {t(service.description)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
