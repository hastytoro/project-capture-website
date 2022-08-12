import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
// Framer motion imports
import { motion } from "framer-motion";

const AboutSection = () => {
  // Variants allow you to define animation states and organize them by name.
  // They allow you to control animations throughout a component tree.
  // And by switching a single `animate` prop.
  // Parent variant:
  const container = {
    // from/start/enter
    hidden: { x: 100 },
    // to/end/leave
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.75,
      },
    },
  };

  // Child variant inherits from parent and can staggerChildren:
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>Our work makes</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography ideas that you have, we have
          professions with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="man holding camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
