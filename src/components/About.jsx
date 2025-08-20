import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const  ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div options ={{max: 45, scale: 1, speed: 450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={ icon } alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-5">
          I’m a Software Engineer (VR & Gaming) student passionate about building efficient, innovative systems.
          During my 8-month internship at Ericsson, I worked on Agile teams developing automation tools, modular architectures, and AI/LLM workflows. My experience spans across multiple technologies including Rust, Python, Java, Redis, Docker, and LangChain, as well as mentoring younger developers through workshops and the INFUSE program.
          I enjoy solving problems, collaborating in diverse teams, and love learning new tools and approaches.
          Beyond coding, I find inspiration in various interests, including basketball, gaming, fitness, and music.
      </motion.p>
      <div className="empty-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")