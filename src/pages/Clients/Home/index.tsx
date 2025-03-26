import React, { useState, useEffect } from "react";
import StatsCounter from "./StatsCounter";
import BookingSection from "./BookingSection";
import SocialButtons from "./SocialButtons";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
  Zoom,
} from "@mui/material";
import {
  AccessTime,
  ArrowForward,
  ArrowUpward,
  Check,
  Facebook,
  Instagram,
  KeyboardArrowDown,
  Menu as MenuIcon,
  PlayArrow,
  Spa as SpaIcon,
} from "@mui/icons-material";
import IntroductionSection from "./sections/IntroductionSection";
import BenefitsSection from "./sections/BenefitsSection";
import AtmosphereSection from "./sections/AtmosphereSection";
import ServicesSection from './sections/ServicesSection';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top button
  const ScrollToTop = () => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 10,
          }}
        >
          <IconButton
            aria-label="scroll to top"
            sx={{
              bgcolor: "#8B5A2B",
              color: "white",
              "&:hover": {
                bgcolor: "#6E4A22",
              },
            }}
          >
            <ArrowUpward />
          </IconButton>
        </Box>
      </Zoom>
    );
  };


  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#8B5A2B",
                    bgcolor: "rgba(255,255,255,0.9)",
                    display: "inline-block",
                    px: 2,
                    py: 0.5,
                    mb: 2,
                  }}
                >
                  CHÀO MỪNG ĐẾN VỚI TẤM ƠI SPA
                </Typography>

                <Typography
                  variant={isMobile ? "h3" : "h1"}
                  component="h2"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    mb: 3,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  Trải Nghiệm Thư Giãn Đích Thực
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    mb: 4,
                    maxWidth: 600,
                    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  Khám phá không gian thư giãn tuyệt vời với các liệu pháp chăm
                  sóc sức khỏe và sắc đẹp độc đáo
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: "#8B5A2B",
                      "&:hover": {
                        bgcolor: "#6E4A22",
                      },
                      borderRadius: "30px",
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Đặt lịch ngay
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      borderColor: "white",
                      color: "white",
                      borderRadius: "30px",
                      px: 3,
                      py: 1.5,
                      "&:hover": {
                        borderColor: "white",
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    Xem video
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Scroll down indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <Typography
            variant="body2"
            sx={{ mb: 1, textTransform: "uppercase", letterSpacing: 1 }}
          >
            Khám phá thêm
          </Typography>
          <KeyboardArrowDown
            sx={{
              fontSize: 36,
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
                "40%": { transform: "translateY(-20px)" },
                "60%": { transform: "translateY(-10px)" },
              },
            }}
          />
        </Box>
      </Box>

      <IntroductionSection />

      {/* Services Section */}
      <ServicesSection />

      <BenefitsSection />
      <AtmosphereSection />

      <StatsCounter />
      <BookingSection />
      <ScrollToTop />
    </Box>
  );
};

export default HomePage;