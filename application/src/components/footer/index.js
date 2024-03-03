import React from "react";
import { FooterContainer, FooterH2, FooterLink, FooterWrapper } from "./FooterElements";
import "./../../App.css";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4 justify-content-center">
          <div className="col-lg-2 col-sm-6">
            <FooterH2>Quick Links</FooterH2>
            <FooterLink href="/">About</FooterLink>
            <FooterLink href="/">Discover</FooterLink>
            <FooterLink href="/">Services</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
          </div>
          <div className="col-lg-2 col-sm-6">
            <FooterH2>Contact Us</FooterH2>
            <FooterLink href="/contactus">Contact Us</FooterLink>
          </div>
          <div className="col-12 mt-5 text-center">
            <h1 className="logo-text">- Savoyage -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
