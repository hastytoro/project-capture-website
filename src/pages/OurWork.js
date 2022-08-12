import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { Hide } from "../styles";

// Animations
import { motion } from "framer-motion";
import {
  fadeAnimation,
  pageAnimation,
  photoAnimation,
  lineAnimation,
  sliderAnimation,
  sliderWrapperAnimation,
} from "../animation";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderWrapperAnimation}>
        <FrameO1 variants={sliderAnimation}></FrameO1>
        <FrameO2 variants={sliderAnimation}></FrameO2>
        <FrameO3 variants={sliderAnimation}></FrameO3>
        <FrameO4 variants={sliderAnimation}></FrameO4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fadeAnimation}>The Racer</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={theracer}
              alt="theracer"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fadeAnimation}>Good Times</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt="goodtimes"
            />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden; /* for any overflowing animation  */
  padding: 5rem 10rem; /* lines up with Nav as container  */
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

// Frame "loading" animation
const FrameO1 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 99999;
`;
const FrameO2 = styled(FrameO1)`
  background: #ff8efb;
`;
const FrameO3 = styled(FrameO1)`
  background: #8ed2ff;
`;
const FrameO4 = styled(FrameO1)`
  background: #8effa0;
`;

export default OurWork;
