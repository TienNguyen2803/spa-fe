
import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Header from "../../pages/Clients/Home/Header";
import Footer from "../../pages/Clients/Home/Footer";

const ThemeClientLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, mt: 8 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default ThemeClientLayout;
