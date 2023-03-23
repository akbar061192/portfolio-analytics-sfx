import { motion } from 'framer-motion';
import { useState } from 'react';
import SnackBar from '../../globals/components/SnackBar/SnackBar';
import PortfolioAnalytics from '../../globals/components/Home/PortfolioAnalytics';
import HowWorks from '../../globals/components/Home/HowWorks';
import InvestWisely from '../../globals/components/Home/InvestWisely';
import Footer from '../../globals/components/Home/Footer';
import { Navbar } from '../../globals/components/Home/Navbar';

const Landing = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  return (
    <>
      <Navbar setOpenSnackBar={setOpenSnackBar} setSnackBarMessage={setSnackBarMessage} />
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        exit={{ opacity: 1 }}
      >
        <PortfolioAnalytics />
        <HowWorks />
        <InvestWisely setOpenSnackBar={setOpenSnackBar} setSnackBarMessage={setSnackBarMessage} />
        <Footer />
      </motion.div>

      {openSnackBar ? (
        <SnackBar
          openSnackBar={openSnackBar}
          handleCloseSnackBar={() => setOpenSnackBar(false)}
          snackBarMessage={snackBarMessage}
        />
      ) : null}
    </>
  );
};

export default Landing;
