import React from "react";

import styled from "styled-components";
import { About } from "../styles";
// Reusable component:
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <div className="question">
        <Toggle>
          <h4>How Do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              maxime. Explicabo, recusandae sed. Perspiciatis, eum voluptatibus
              illo velit quia dolorem.
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <Toggle>
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              maxime. Explicabo, recusandae sed. Perspiciatis, eum voluptatibus
              illo velit quia dolorem.
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <Toggle>
          <h4>Different Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              maxime. Explicabo, recusandae sed. Perspiciatis, eum voluptatibus
              illo velit quia dolorem.
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <Toggle>
          <h4>What Products do you offer</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              maxime. Explicabo, recusandae sed. Perspiciatis, eum voluptatibus
              illo velit quia dolorem.
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>
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
