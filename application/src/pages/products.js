import React, { useState } from "react";
import Footer from "../components/footer";
import Products from "../components/products";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Products />
      <Footer />
    </>
  );
};

export default ProductsPage;
