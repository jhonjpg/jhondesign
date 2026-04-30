import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Skills from '../components/AboutComponents/Skills';
import { Experience } from '../components/AboutComponents/Experience';
import { Education } from '../components/AboutComponents/Education';
import { InfoAboutMe } from '../components/AboutComponents/InfoAboutMe';


const AboutMe = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();

  // Animate moon X position as you scroll
  const moonX = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Brightness effect for image
  const rawBrightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0]);
  const smoothBrightness = useSpring(rawBrightness, { stiffness: 100, damping: 20 });
  const filteredBrightness = useTransform(smoothBrightness, v => `brightness(${v})`);

  const handleDownloadCV = () => {
    const cvDownloadUrl = 'img/JonathanPena_Resume.pdf';
    window.open(cvDownloadUrl, '_blank');
  };

  return (
    <section id="about" className="w-full h-auto p-4 flex flex-col bg-black gap-5">
         <motion.strong
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 1 } }}
            viewport={{ once: true }}
            className="wingle text-2xl text-blue-300 text-center"
          >
            {t('aboutMe.about')}
          </motion.strong>

          <motion.strong
            initial={{ y: -60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 1.2 } }}
            viewport={{ once: true }}
            className="wingle text-5xl text-blue-500 text-center"
          >
            {t('aboutMe.heading')} <span className="text-blue-700">{t('aboutMe.Im')}</span>
          </motion.strong>

          <hr className="w-20 my-6 bg-blue-500" />

      <ul className="w-full flex flex-col md:flex-row h-full">
        <li className="w-full relative  md:w-1/3   flex flex-col justify-start gap-4 items-start p-2">
       
        <InfoAboutMe/>

          <div className="hidden md:block md:w-full flex flex-col gap-4 justify-start items-start p-2">
       

       <Experience/>

       <Education/>
   

    
     </div>




        </li>

        <li className="w-full md:w-1/2 flex flex-col p-2 overflow-hidden">
          

       
       <Skills/>
     </li>

 
     

     {/* <div className=" w-full p-10 bg-zinc-900/50  flex max-w-6xl">

<aside className="w-1/3  items-center mb-20 flex flex-col justify-center">
<h4 className="text-white text-6xl w-full rotate-90">Learning</h4>
</aside>


<Skills/>


</div> */}

        
      </ul>

    
    </section>
  );
};

export default AboutMe;
