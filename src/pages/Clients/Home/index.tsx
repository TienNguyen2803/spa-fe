import { Box } from "@mui/material";
import { HeroSection, AboutSection, ServicesSection } from "./sections";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </Box>
  );
};

export default HomePage;
