import React, { useState, useEffect  } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="global-sourcing"
        subtitle="Embarking on Global Sourcing"
        title="Navigate the Seas of Commerce"
        text="Dive into the vast ocean of global sourcing with SAVoyage Distributions. Our expertise in navigating the complex waters of international trade ensures your business has access to the most coveted products worldwide. Join us on a voyage where success is not just a destination, but a journey."
        btnText="Discover More"
      />
      <InfoSectionLight
        image={Image2}
        id="customer-support"
        subtitle="Steadfast Customer Support"
        title="Guiding You Every Step of the Way"
        text="At SAVoyage, your journey is paramount. With dedicated support that mirrors the guiding light of a lighthouse, we ensure your voyage through the market's ebbs and flows is smooth and steadfast. Our team is your crew, ready to assist at a moment's notice."
        btnText="Learn More"
      />
      <Services />
      <InfoSectionLight
        image={Image1} // Assume Image1 is also relevant here; adjust as needed.
        id="strategic-partnerships"
        subtitle="Forge Lasting Alliances"
        title="Partnerships That Weather Any Storm"
        text="In the vast expanse of the wholesale market, the alliances we forge are our most treasured assets. SAVoyage Distributions prides itself on building enduring relationships with suppliers and clients alike, ensuring a mutual journey towards prosperity and beyond."
        btnText="View Partnerships"
      />
      <Footer />
    </>
  );
  
};
