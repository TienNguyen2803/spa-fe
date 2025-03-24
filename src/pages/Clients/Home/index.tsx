
import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";

const HomePage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </Box>
  );
};

export default HomePage;
