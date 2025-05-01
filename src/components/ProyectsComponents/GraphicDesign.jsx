import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const GraphicDesign = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('logo');

  const graphicDesign = t('graphicDesign', { returnObjects: true });

  // ✅ Extract categories from the JSON data
  const categories = graphicDesign.map((item) => item.proyectName);

  const handleComponentClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full p-4">
      {/* Category Tabs */}
      <ul className="w-full flex gap-6 text-blue-200 text-2xl justify-evenly cursor-pointer mb-8">
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
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.li>
        ))}
      </ul>

      {/* Grid Container */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
        {graphicDesign
          .filter((item) => item.proyectName === selectedCategory)
          .flatMap((item) =>
            item.design.map((designItem, index) => {
              const isVideo = designItem.endsWith('.mp4');
              const randomSpan =
                index % 5 === 0
                  ? 'col-span-2 row-span-2'
                  : index % 3 === 0
                  ? 'col-span-2'
                  : '';

              return (
                <li
                  key={index}
                  className={`relative w-full h-full ${randomSpan} bg-black rounded-xl overflow-hidden`}
                >
                  {isVideo ? (
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="w-full h-full object-contain"
                    >
                      <source src={designItem} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={designItem}
                      alt={`Design ${index}`}
                      className="w-full h-full object-contain"
                    />
                  )}
                </li>
              );
            })
          )}
      </ul>
    </div>
  );
};

export default GraphicDesign;
