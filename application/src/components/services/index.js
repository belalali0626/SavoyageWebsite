import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg";
import Icon2 from "../../images/online.svg";
import Icon3 from "../../images/real-time.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Supplier Partnerships</ServicesH2>
          <ServicesP>
            Building trust and navigating win-win collaborations. We forge robust partnerships with suppliers, akin to crafting vessels built to weather any storm, ensuring a steady flow of exceptional products for our customers.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Customer Support Excellence</ServicesH2>
          <ServicesP>
            Your dedicated crew, ensuring smooth sailing. Our team of dedicated specialists offers prompt and attentive assistance, tailoring an exceptional experience that aligns perfectly with your unique needs.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Advantageous Pricing</ServicesH2>
          <ServicesP>
            Competitive pricing, anchoring your budget. Through our meticulously cultivated network of esteemed purveyors, we secure exceptionally advantageous pricing for a diverse collection of premium products.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
