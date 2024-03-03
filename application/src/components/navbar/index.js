import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./../../App.css";

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo href="/">
                <h1 className="logo-text">Savoyage</h1>
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks href="/">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks href="/">Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks href="/">Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks href="/products">Products</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink href="/contactus">Contact Us</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
);
};

export default Navbar;
