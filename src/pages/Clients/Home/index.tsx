
import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './Header';

// Import components from the provided code
const {
  HeroSection,
  AboutSection, 
  ServicesSection
} = require('./sections');

const HomePage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
    </Box>
  );
};

export default HomePage;
