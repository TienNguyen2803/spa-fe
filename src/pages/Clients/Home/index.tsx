
import React from 'react';
import { Box } from '@mui/material';
import { HeroSection, AboutSection } from './sections';
import Header from './Header';

const HomePage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <Box sx={{ pt: { xs: 8, md: 10 } }}>
        <HeroSection />
        <AboutSection />
      </Box>
    </Box>
  );
};

export default HomePage;
