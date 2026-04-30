import React from 'react';
import { useTranslation } from 'react-i18next';

import iconDev1 from '../../../public/assets/Skills/iconDev1.png';
import iconDev2 from '../../../public/assets/Skills/iconDev2.png';
import iconDev3 from '../../../public/assets/Skills/iconDev3.png';
import iconDev4 from '../../../public/assets/Skills/iconDev4.png';
import iconDev5 from '../../../public/assets/Skills/iconDev5.png';
import iconDev6 from '../../../public/assets/Skills/iconDev6.png';
import iconDev7 from '../../../public/assets/Skills/iconDev7.png';
import iconDev8 from '../../../public/assets/Skills/iconDev8.png';
import iconDev9 from '../../../public/assets/Skills/iconDev9.png';
import iconDev10 from '../../../public/assets/Skills/iconDev10.png';
import iconDev11 from '../../../public/assets/Skills/iconDev11.png';
import iconDev12 from '../../../public/assets/Skills/iconDev12.png';

const Skills = () => {
  const { t } = useTranslation();

  const DevLogos = [
    {
      skills: [
        iconDev6,
        iconDev7,
        iconDev5,
        iconDev4,
        iconDev3,
        iconDev11,
        iconDev10,
        iconDev8,
        iconDev2,
        iconDev1,
        iconDev9,
        iconDev12,
      ],

      nombres: [
        "HTML",
        "CSS",
        "BOOTSTRAP",
        "TAILWIND",
        "JAVASCRIPT",
        "JQUERY",
        "NODE JS",
        "EXPRESS",
        "MONGO DB",
        "REACT JS",
        "GITHUB",
        "API REST",
      ],
    },
  ];

  return (
    <section className="w-full h-full">
      <p className="text-6xl p-10 text-center mb-4 text-white uppercase tracking-widest">
        {t('services.skillsHeading')}
      </p>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center px-4">
        {DevLogos[0].skills.map((imageUrl, index) => (
          <li
            key={index}
            className="w-36 flex flex-col justify-evenly items-center"
          >
            <div className="w-20 h-20">
              <img
                className="w-full h-full object-contain"
                src={imageUrl}
                alt={DevLogos[0].nombres[index]}
              />
            </div>

            <p className="text-xl text-white text-center mt-4">
              {DevLogos[0].nombres[index]}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;