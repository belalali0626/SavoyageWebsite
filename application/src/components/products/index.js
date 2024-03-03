import React from "react";
import { ProductContainer, ProductWrapper, ProductBox, ProductDescription, ProductTitle } from "./ProductElements.js";
import healthImage from '../../images/health.jpg';
import toysImage from '../../images/toys.jpg';
import beautySkincareImage from '../../images/beauty-skincare.jpg';
import homeApplianceImage from '../../images/Home-Appliance-PNG-Photo.jpg';
import babyToddlerImage from '../../images/baby-toddler.jpg';
import sportsFitnessImage from '../../images/sports-fitness.jpg';
import petAccessoriesImage from '../../images/pet-accessories.jpg';

const Products = () => {
  return (
    <ProductContainer>
      <ProductTitle>Discover Our Wide Range of Wholesale Products</ProductTitle>
      <ProductWrapper>
        <ProductBox>
          <img src={healthImage} alt="Health and Wellness Products" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          <ProductDescription>
            Embark on a journey towards optimal health with our comprehensive selection of health and wellness products. From essential pharmaceuticals to over-the-counter medications and holistic herbal remedies, our catalog is meticulously curated to enhance your physical and mental well-being. Explore our fitness equipment section for high-quality exercise machines, yoga mats, and accessories designed to support your active lifestyle and promote overall health.
          </ProductDescription>
        </ProductBox>
        <ProductBox>
          <img src={toysImage} alt="Toys for All Ages" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          <ProductDescription>
            Spark imagination and joy with our diverse range of toys for children of all ages. Our collection spans from timeless classics like dolls and action figures to innovative board games and puzzles that challenge and entertain. Encourage outdoor play with our durable swing sets, playhouses, and trampolines, all designed to foster creativity and physical activity. For the collectors and hobbyists, delve into our selection of model kits, remote-control vehicles, and collectible figurines, each promising hours of engaging fun.
          </ProductDescription>
        </ProductBox>
        <ProductBox>
          <img src={beautySkincareImage} alt="Beauty and Skincare" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          <ProductDescription>
            Elevate your beauty routine with our premium collection of skincare and cosmetics. Our skincare line includes rejuvenating serums, luxurious moisturizers, and gentle cleansers tailored to nourish and revitalize your skin. Discover our cosmetics range, offering vibrant shades and luxurious textures in lipsticks, eyeshadows, and foundations to enhance your natural beauty. Complement your makeup application with our high-quality beauty accessories, including precision brushes and versatile sponges, for flawless results.
          </ProductDescription>
        </ProductBox>
        <ProductBox>
          <img src={homeApplianceImage} alt="Electronics and Appliances" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          <ProductDescription>
            Stay ahead of the curve with our selection of consumer electronics and home appliances. From the latest smartphones and tablets to laptops and cameras, our products keep you connected and entertained. Upgrade your home with our range of kitchen appliances, smart TVs, energy-efficient refrigerators, and more, each designed to enhance your lifestyle through innovation and convenience. For tech enthusiasts, explore our electronic components to support your projects with essential circuit boards, semiconductors, and capacitors.
          </ProductDescription>
        </ProductBox>
        <ProductBox>
          <img src={babyToddlerImage} alt="Baby and Toddler Accessories" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          <ProductDescription>
            Care for your little ones with our curated selection of baby and toddler accessories. From ergonomic baby carriers and stylish diaper bags to educational toys and advanced safety products, we provide everything you need for your child's comfort, safety, and development. Our range is thoughtfully selected to support parents and guardians in nurturing their children during these formative years, ensuring both convenience and peace of mind.
          </ProductDescription>
        </ProductBox>
        <ProductBox>
          <img src={sportsFitnessImage} alt="Sports and Fitness Equipment" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          <ProductDescription>
            Achieve your fitness goals with our extensive range of sports and fitness equipment. Whether you're an amateur enthusiast or a professional athlete, our selection caters to all levels of activity, from gym gear and wearable tech to sports apparel and equipment for various sports. Unlock your potential with products designed to enhance your performance, improve your health, and support your fitness journey every step of the way.
          </ProductDescription>
        </ProductBox>
        <ProductBox>
          <img src={petAccessoriesImage} alt="Pet Accessories" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          <ProductDescription>
            Show love for your pets with our wide array of pet accessories. Treat them to the comfort of our cozy beds, the style of our fashionable collars, and the fun of our engaging toys. Our collection caters to pets of all sizes, breeds, and personalities, ensuring their happiness and well-being. From daily necessities to luxury indulgences, find everything you need to pamper your furry, feathered, or scaled companions and keep them healthy and joyful.
          </ProductDescription>
        </ProductBox>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Products;
