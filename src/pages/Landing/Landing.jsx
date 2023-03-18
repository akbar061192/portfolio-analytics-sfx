import React from 'react';
import HowWorks from '../../globals/components/HowWorks';
import Hero from '../../globals/components/Hero';
// import RequestDemo from '../../globals/components/RequestDemo';
import Footer from '../../globals/components/Footer';
import InvestWisely from '../../globals/components/InvestWisely';

const Landing = () => {
  return (
    <>
      <Hero />
      <HowWorks />
      <InvestWisely />
      {/* <RequestDemo /> */}
      <Footer />
    </>
  );
};

export default Landing;
