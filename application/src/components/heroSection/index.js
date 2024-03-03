import React, { useState, useEffect, useRef } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { ButtonR } from "../ButtonElements";
import { ButtonAHref } from "../ButtonElements";

import "../../App.css";

// Function to dynamically load scripts
function loadScript(src, id) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load the script ${src}`));
    document.head.appendChild(script);
  });
}

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const heroRef = useRef(null); // Ref for the container where the Vanta effect will be applied

  useEffect(() => {
    const initVanta = async () => {
      await loadScript('https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js', 'three-script');
      await loadScript('https://www.vantajs.com/dist/vanta.cells.min.js', 'vanta-script');

      // Initialize VANTA.CELLS effect after scripts are loaded
      if (window.VANTA) {
        window.VANTA.CELLS({
          el: heroRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x3939,
          color2: 0x3e5ff
        });
      }
    };

    initVanta();

    // Cleanup function to destroy Vanta effect when the component unmounts
    return () => {
      if (window.VANTA) {
        window.VANTA.animations.forEach(animation => animation.destroy());
        window.VANTA.animations = [];
      }
    };
  }, []);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer ref={heroRef}>
      {/* VideoBg component is removed/commented out to use the Vanta.js effect */}
      <HeroContent>
        <h1 className="h1-hero">Chart Your Course to Wholesale Success</h1>
        <p className="hero-text">
          Embark on your voyage with SAVoyage Distributions and discover a sea of premium wholesale products. Sign up now to navigate the best deals for your business.
        </p>
        <HeroBtnWrapper>
    <ButtonAHref href="/contactus" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
        Set Sail {hover ? <ArrowForward /> : <ArrowRight />}
    </ButtonAHref>
</HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
  
  
};

export default HeroSection;
