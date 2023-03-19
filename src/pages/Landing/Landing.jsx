import React from 'react';
import HowWorks from '../../globals/components/HowWorks';
import Hero from '../../globals/components/Hero';
import Footer from '../../globals/components/Footer';
import InvestWisely from '../../globals/components/InvestWisely';
import { motion } from 'framer-motion';
import Navbar from '../../globals/components/Navbar';

const Landing = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        exit={{ opacity: 1 }}
      >
        <Hero />
        <HowWorks />
        <InvestWisely />
        <Footer />
      </motion.div>
    </>
  );
};

export default Landing;
