import React from 'react'
import { useTranslation } from 'react-i18next';




const Skills = () => {

    const { t } = useTranslation();


    const DevLogos = [

        {

            skills: [
              "src/assets/skills/iconDev6.png",
              "src/assets/skills/iconDev7.png",
              "src/assets/skills/iconDev5.png",
              "src/assets/skills/iconDev4.png",

              "src/assets/skills/iconDev3.png",
              "src/assets/skills/iconDev11.png",
              "src/assets/skills/iconDev10.png",
              "src/assets/skills/iconDev8.png",
              "src/assets/skills/iconDev2.png",
              "src/assets/skills/iconDev1.png",

              "src/assets/skills/iconDev9.png",
              "src/assets/skills/iconDev12.png",

              

              

            ],

            nombres: ["HTML ", "CSS", "BOOSTRAP", "TAILWIND", "JAVASCRIPT ", " JQUERY ", "NODE JS", "EXPRESS ", "MONGO DB", "REACT JS", "GITHUB", "API REST"],

        }

    ]


    return (

        <>

<section className="w-full h-full ">
  <p className="text-6xl p-10  text-center mb-4 text-white space-x-6 uppercase 	tracking-widest	">{t('services.skillsHeading')}</p>

  <ul className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center px-4">
    {DevLogos[0].skills.map((imageUrl, index) => (
      <li
        key={index}
        className="w-36 flex flex-col justify-evenly items-center transform scale-100"
      >
        <div className="w-20 h-20">
          <img
            className="w-full h-full object-cover object-center"
            src={`${imageUrl}`}
            alt="skill logo"
          />
        </div>
        <p className="text-xl text-white text-center mt-4">
          {DevLogos[0].nombres[index]}
        </p>
      </li>
    ))}
  </ul>
</section>


        </>


    )
}

export default Skills