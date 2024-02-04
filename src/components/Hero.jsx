import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const roles = ['Front-end Developer', 'Data Analyst', 'Data Engineer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const changeRole = () => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    };

    const intervalId = setInterval(changeRole, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff] relative'>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[80%] w-1 sm:h-80 h-32 violet-gradient"></div>
          </div>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={`${styles.heroHeadText} text-white`}>
              Ciao, sono <span className='text-[#915eff]'>Marzia</span>
            </h2>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              key={roles[currentRoleIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              {roles[currentRoleIndex]}
            </motion.span>
            <br />
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              testo <br className='sm:block hidden' /> riempitivo
            </p>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

