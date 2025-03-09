"use client"
import Navbar from '@/components/Navbar';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion'; // For scroll-based animations
import { useRef } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Home = () => {

  const featuredCollections = [
    { title: "Diamond’s Haven", desc: "Mesmerising jewellery collection...", src: "dimond.png" },
    { title: "Silver Wolf", desc: "Enchanting jewellery collection...", src: "silver.png" },
    { title: "Couple Paradise", desc: "Captivating jewellery collection...", src: "couple.png" },
    { title: "Gold Lava", desc: "Radiant jewellery collection...", src: "gold.png" },
  ];

  const categories = [{
    title: "Rings", src: "8.png", badge: "New"
  },
  {
    title: "Earrings", src: "9.png", badge: "10% OFF"
  },
  {
    title: "Necklace", src: "10.png", badge: "25% OFF"
  }, {
    title: "Bracelets", src: "11.png", badge: "30% OFF"
  }];

  // Animation Variants
  const fadeIn = {
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardHover = {
    hover: { scale: 1.05, rotate: 1, transition: { duration: 0.3 } },
  };

  // Refs for scroll detection
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const collectionRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeatureInView = useInView(featureRef, { once: true });
  const isCollectionInView = useInView(collectionRef, { once: true });

  return (
    <div className="w-full bg-[#312f30] overflow-hidden font-['Mulish']">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-[#312f30] to-[#4d433e] gap-6"
      >
        <motion.img
          variants={fadeIn}
          className="w-72 md:h-screen md:w-[608px] lg:mt-0 rounded-full md:rounded-none md:rounded-tr-[304px] border border-[#e8b08b] shadow-lg"
          src="/header.png"
          alt="Jewelry Showcase"
        />
        <motion.div variants={fadeIn} className="text-center lg:text-left max-w-2xl px-4 ">
          <motion.h1
            className="text-[#fff4e9] text-5xl md:text-7xl lg:text-[140px] font-['Italiana'] leading-tight animate-pulse-slow"
            animate={{ scale: [1, 1.02, 1], transition: { duration: 2, repeat: Infinity } }}
          >
            Simple & Elegant
          </motion.h1>
          <motion.p variants={fadeIn} className="text-white text-lg mt-4">
            Jewellery for the modern woman
          </motion.p>
          <motion.button
            variants={fadeIn}
            whileHover={{ scale: 1.1, backgroundColor: "#e8b08b" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-[#fff4e9] text-[#312f30] rounded-tr-[30px] rounded-bl-[30px] font-bold shadow-md"
          >
            <Link href={"#collection"}>
              SHOP COLLECTION
            </Link>
          </motion.button>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div className="flex mt-4 md:flex-col items-center gap-6 md:ml-8 text-white text-2xl">
          <a href="https://wa.me/+918446762510" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-green-500 transition" />
          </a>
          <a href="https://www.instagram.com/k_s_beauty7773/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="mailto:skbeauty@gmail.com">
            <FaEnvelope className="hover:text-yellow-500 transition" />
          </a>
          <a href="tel:+918446762510">
            <FaPhone className="hover:text-blue-500 transition" />
          </a>
        </motion.div>
      </motion.div>

      {/* Feature Section */}
      <motion.div
        ref={featureRef}
        initial="hidden"
        animate={isFeatureInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="w-full flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 bg-[#4d433e]"
      >
        <motion.div variants={fadeIn} className="text-center">
          <h2 className="text-[#fff4e9] text-3xl md:text-5xl lg:text-6xl font-['Italiana']">Our Best Features</h2>
          <p className="text-white text-sm md:text-base mt-4">The finest jewellery you could find.</p>
        </motion.div>

        {/* Product Cards */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((product, index) => (
            <motion.div
              key={index}
              variants={cardHover}
              whileHover="hover"
              className="bg-[#5a504b] p-4 rounded-lg flex flex-col justify-between items-center shadow-lg animate-fade-up"
            >
              {product.badge && (
                <div className="px-4 py-2 rounded-full border bg-[#e8b08a]/40 border-[#e8b08a] text-white text-sm animate-bounce">
                  {product.badge}
                </div>
              )}
              <img className="w-48 h-38 mt-4 rounded-md self-center" src={product.src} alt={product.title} />
              <div className="bg-[#1d1917] w-full mt-4 p-4 rounded-lg text-center">
                <h3 className="text-white text-xl font-['Bodoni Moda']">{product.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Jewelry Collection Section */}
      <motion.div
        initial="hidden"
        animate={isCollectionInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="w-full flex flex-col items-center py-16 bg-[#312f30]"
        id='collection'
      >
        <h2 className="text-[#fff4e9] text-4xl md:text-5xl font-['Italiana'] text-center">Collection</h2>
        <p className="text-white text-base text-center mt-4">Find all the jewellery you will need here.</p>
      </motion.div>


      {/* Featured Collection Section */}
      <motion.div
        initial="hidden"
        animate={isFeatureInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="flex flex-wrap justify-center items-center gap-12 px-6 md:px-16 py-16 bg-[#312f30]"
      >
        {featuredCollections.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="flex flex-col md:flex-row items-center gap-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-[280px] h-[236px] border border-[#e8b08a] bg-black/30 rounded-md shadow-md " >
              <img className="rounded-md" src={item.src} alt={item.title} />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-white text-2xl font-['Italiana'] animate-text-glow">{item.title}</h3>
              <p className="text-white text-base">{item.desc}</p>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#e8b08b" }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-[#fff4e9] rounded-tr-2xl rounded-bl-2xl text-[#312f30] font-bold shadow-md"
              >
                VIEW DETAILS
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Collection Grid */}
      {/* <motion.div
        ref={collectionRef}
        initial="hidden"
        animate={isCollectionInView ? "visible" : "hidden"}
        variants={cardHover}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-16 py-16 bg-[#4d433e]"
      >
        {categories.map((item, index) => (
          <motion.div
            key={index}
            variants={staggerContainer}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2.5"
          >
            <div className="w-full h-56 bg-black/30 rounded-md shadow-lg animate-fade-in flex justify-center items-center" >
              <img src={item.src} alt={item.title} className="w-32 h-32" />
            </div>
            <div className="text-white text-2xl font-['Italiana'] animate-text-glow">{item.title}</div>
          </motion.div>
        ))}
      </motion.div> */}


      {/* Footer Section */}
      <div
        className="w-full px-6 md:px-16 py-16 bg-[#312f30] flex flex-col items-center gap-10 font-mono"
      >
        <motion.div variants={fadeIn} className="w-full flex flex-wrap justify-between items-start gap-6">
          <div className="flex flex-col gap-4 text-[#cacaca] text-base">
            <h3 className="animate-text-glow">New Collection</h3>
            <ul className="text-[#fff9ee] text-sm space-y-2">
              {["Diamond Rings", "Gold Necklace", "Silver Bracelets", "Silver Studs", "Couple Bracelets", "Gold Rings", "Couple Rings", "Diamond Pendants"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }} className="cursor-pointer">
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-[#cacaca] text-base">
            <h3 className="animate-text-glow">Support</h3>
            <ul className="text-[#fff9ee] text-sm space-y-2">
              {["FAQ’s", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }} className="cursor-pointer">
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-[#cacaca] text-base font-mono">
            <h3 className="animate-text-glow text-lg">Contact Us</h3>
            <ul className="text-[#fff9ee] text-sm space-y-2  font-mono">
              <li>Timings: 10AM-10:30PM (Monday-Sunday)</li>
              <li>Call: +91 8446762510</li>
              <li>Email: skbeauty@gmail.com</li>
            </ul>
            <motion.div className="flex items-center gap-6 mt-4 text-white text-2xl">
              <a href="https://wa.me/+918446762510" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-green-500 transition" />
              </a>
              <a href="https://www.instagram.com/k_s_beauty7773/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500 transition hover:scale-110" />
              </a>
              <a href="mailto:skbeauty@gmail.com">
                <FaEnvelope className="hover:text-yellow-500 transition" />
              </a>
              <a href="tel:+918446762510">
                <FaPhone className="hover:text-blue-500 transition" />
              </a>
            </motion.div>
          </div>
        </motion.div>
        {/* <motion.div variants={fadeIn} className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#cacaca] text-lg">Get in touch with us</div>
          <motion.div whileHover={{ scale: 1.1 }} className="flex gap-4 text-[#fff9ee] text-2xl cursor-pointer">
            Contact Us 
          </motion.div>
        </motion.div> */}
        <motion.div variants={fadeIn} className="text-[#fff9ee] text-sm text-center">
          Copyright © 2025 All rights reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default Home;