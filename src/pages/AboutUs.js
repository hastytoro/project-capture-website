import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";

// Page component is the acting container for above related components.
const AboutUs = () => {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
};

export default AboutUs;
