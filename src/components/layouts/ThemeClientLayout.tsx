
import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Header from "../../pages/Clients/Home/Header";
import Footer from "../../pages/Clients/Home/Footer";
import SocialButtons from "../../pages/Clients/Home/SocialButtons";

const ThemeClientLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: "64px", // Height of the fixed header
        }}
      >
        <Outlet />
      </Box>
      <SocialButtons />
      <Footer />
    </Box>
  );
};

export default ThemeClientLayout;
