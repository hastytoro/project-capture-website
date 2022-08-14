import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";

import Wave from "./Wave";

// Framer motion imports
import { motion } from "framer-motion";
import {
  pageAnimation,
  titleAnimation,
  fadeAnimation,
  photoAnimation,
} from "../animation";

import ScrollTop from "../ScrollTop";

const AboutSection = () => {
  return (
    <About variants={pageAnimation}>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>Our work makes</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          cupiditate vero in, blanditiis odio ad incidunt saepe! Dolorem, omnis
          explicabo.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="man holding camera"
        />
      </Image>
      <Wave />
      <ScrollTop />
    </About>
  );
};

export default AboutSection;
