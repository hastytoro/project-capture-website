import React from "react";

import styled from "styled-components";
import { About } from "../styles";
// Reusable component:
import Toggle from "./Toggle";

import { scrollAnimation } from "../animation";
import { useScroll } from "../useScroll";
import { AnimateSharedLayout } from "framer-motion";
// Important, `framer-motion` requires motion tags.
// If you wrapping a component with a framer motion component, you need to apply
// `motion` to the underlining child component you wrap for it to animate.
// Within `Toggle` we wrapped elements with `motion` and the layout attribute.
// If true, this component will automatically animate to its new position.
// For example: <motion.div layout ... > and <motion.h4 layout ... >
// This will perform a `layout` animation using performant transforms.
// To correct position distortion on immediate `children`, add layout to them.
const FaqSection = () => {
  const [element, controls] = useScroll(0.5); // custom hook.
  return (
    <Faq
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollAnimation}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              maxime. Explicabo, recusandae sed.
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              maxime. Explicabo, recusandae sed.
            </p>
          </div>
        </Toggle>

        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              maxime. Explicabo, recusandae sed.
            </p>
          </div>
        </Toggle>

        <Toggle title="What Products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              maxime. Explicabo, recusandae sed.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;

export default FaqSection;
