import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SocialMedia } from '../components/ContactComponents/SocialMedia';

export const Contact = () => {
  const { t } = useTranslation();

  const inputCss =
    'w-full md:w-[48%] bg-gray-800/50 border-b-2 border-gray-500 p-4 text-white rounded';

  return (
    <motion.main
      id="contact"
      className="relative w-full min-h-96   flex flex-col items-center gap-10 py-10 px-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.strong
        className="w-full text-3xl text-blue-500 mb-6 md:text-5xl text-center border-b-4 border-blue-500 pb-4 max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {t('contactDiv.contactMe')}
      </motion.strong>

      <section className="w-full flex flex-col justify-center items-center gap-10 md:flex-row ">
        {/* Left Side - Contact Info */}
        <motion.aside
          className="w-full md:w-1/3 flex flex-col gap-6 text-white text-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <h3 className="text-2xl mb-1">Email Me</h3>
            <p className="text-gray-300">jonathan050315jj@gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl mb-1">Phone Me</h3>
            <p className="text-gray-300">(908) 591-5193</p>
          </div>
          <div>
            <h3 className="text-2xl mb-1">Location</h3>
            <p className="text-gray-300">New Jersey</p>
          </div>
          <SocialMedia />
        </motion.aside>

        {/* Right Side - Form */}
        <motion.fieldset
          className="w-full md:w-2/4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <form
            className="flex flex-col gap-6 w-full"
            action="https://formsubmit.co/6c3bc50ed13db84e1fe2f0325dda5e61"
            method="POST"
          >
            <div className="flex flex-wrap justify-between gap-4">
              <input
                className={inputCss}
                type="text"
                name="firstName"
                required
                placeholder={t('contactDiv.name')}
              />
              <input
                className={inputCss}
                type="text"
                name="lastName"
                required
                placeholder={t('Last Name')}
              />
              <input
                className={inputCss}
                type="email"
                name="email"
                required
                placeholder={t('contactDiv.email')}
              />
              <input
                className={inputCss}
                type="tel"
                name="phone"
                
                placeholder={t('contactDiv.phone')}
              />
              <input
                className={inputCss}
                type="text"
                name="location"
                placeholder={t('Location')}
              />
              <input
                className={inputCss}
                type="date"
                name="date"
                
              />
            </div>

            <textarea
              className="w-full bg-gray-800/50 p-4 border-b-2 border-gray-500 text-white rounded"
              name="message"
              rows="4"
              placeholder={t('contactDiv.message')}
              required
            ></textarea>

            <button
              className="border-2 border-gray-500 p-4 text-white text-xl w-full hover:bg-gray-700 transition"
              type="submit"
            >
              {t('contactDiv.submit')}
            </button>

            {/* Hidden FormSubmit inputs */}
            <input
              type="hidden"
              name="_next"
              value="https://jhonjpg.github.io/jhondesign/"
            />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </motion.fieldset>
      </section>
    </motion.main>
  );
};
