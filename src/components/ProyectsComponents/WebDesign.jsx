import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const WebDesign = () => {
  const { t } = useTranslation();
  const [activeComponent, setActiveComponent] = useState("all");
  const [articulo, setarticulo] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const Proyect = t('proyect', { returnObjects: true });

  const seeMore = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
    setarticulo(true);
  };

  return (
    <li className="w-full max-h-screen overflow-y-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Proyect.map((proyecto, index) => {
          const isExpanded = expandedProject === index;
          const containerClassName = `relative w-full transition-all p-4 flex flex-col gap-4 items-center ${
            isExpanded ? 'bg-black' : ''
          } rounded-xl shadow-lg`;

          if (activeComponent === 'all' || activeComponent === proyecto.categoria) {
            return (
              <motion.div
                key={index}
                className={containerClassName}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl text-white uppercase text-center">
                  {proyecto.proyectName}
                </h3>

                <a
                  className="flex w-full flex-col items-center"
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full overflow-hidden rounded-md">
                    <img
                      src={`jhondesign/${proyecto.imagen}`}
                      alt={proyecto.proyectName}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="mt-4 flex justify-center relative bottom-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <img
                      className="w-52  h-auto rounded-md object-cover"
                      src={`jhondesign/${proyecto.imagen2}`}
                      alt={`${proyecto.proyectName} preview`}
                    />
                  </div>
                </a>
              </motion.div>
            );
          }

          return null;
        })}
      </div>
    </li>
  );
};

export default WebDesign;
