import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const GraphicDesign = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('logo');

  const graphicDesign = t('graphicDesign', { returnObjects: true });

  const categories = graphicDesign.map((item) => item.proyectName);

  const handleComponentClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full p-4">
      {/* CATEGORY TABS */}
      <ul className="w-full flex flex-wrap gap-6 text-blue-200 text-2xl uppercase justify-evenly cursor-pointer mb-10">
        {categories.map((category, index) => (
          <motion.li
            key={category}
            onClick={() => handleComponentClick(category)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.1, color: '#ffffff' }}
            className={`relative px-2 transition-all duration-300 ${
              selectedCategory === category ? 'text-white' : ''
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}

            {selectedCategory === category && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-1 bg-white rounded-full"
                style={{ width: '100%' }}
              />
            )}
          </motion.li>
        ))}
      </ul>

      {/* TRUE MASONRY GALLERY */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {graphicDesign
          .filter((item) => item.proyectName === selectedCategory)
          .flatMap((item) =>
            item.design.map((designItem, index) => {
              const isVideo = designItem.endsWith('.mp4');

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid overflow-hidden rounded-2xl bg-black/40 cursor-pointer group"
                >
                  {isVideo ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto rounded-2xl group-hover:scale-105 duration-300"
                    >
                      <source src={designItem} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={designItem}
                      alt={`Design ${index}`}
                      className="w-full h-auto rounded-2xl object-cover group-hover:scale-105 duration-300"
                    />
                  )}
                </motion.div>
              );
            })
          )}
      </div>
    </div>
  );
};

export default GraphicDesign;