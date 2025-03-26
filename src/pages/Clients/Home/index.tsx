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

  const services = [
    {
      title: "Massage Thư Giãn",
      description:
        "Trải nghiệm liệu pháp massage độc quyền giúp giải tỏa căng thẳng và phục hồi năng lượng.",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      duration: "60-90 phút",
      price: "Từ 350.000đ",
    },
    {
      title: "Chăm Sóc Da Mặt",
      description:
        "Liệu trình chăm sóc da chuyên sâu với các sản phẩm từ thiên nhiên giúp làn da tươi trẻ và rạng rỡ.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      duration: "75-90 phút",
      price: "Từ 450.000đ",
    },
    {
      title: "Tắm Thảo Dược",
      description:
        "Đắm mình trong hương thơm của các loại thảo dược quý giúp thanh lọc cơ thể và thư giãn tinh thần.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      duration: "90-120 phút",
      price: "Từ 500.000đ",
    },
    {
      title: "Liệu Pháp Đá Nóng",
      description:
        "Kết hợp giữa massage và đá nóng giúp thư giãn cơ bắp, cải thiện tuần hoàn và giảm đau nhức.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      duration: "90 phút",
      price: "Từ 550.000đ",
    },
  ];

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
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F8F5F1" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#8B5A2B",
                fontWeight: 600,
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Dịch vụ của chúng tôi
            </Typography>

            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Trải Nghiệm Dịch Vụ Đẳng Cấp
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                mb: 2,
              }}
            >
              Khám phá các dịch vụ chăm sóc sức khỏe và sắc đẹp được thiết kế
              riêng biệt để đáp ứng nhu cầu của từng khách hàng
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        height: 240,
                        transition: "transform 0.5s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        bgcolor: "rgba(139, 90, 43, 0.9)",
                        color: "white",
                        py: 0.5,
                        px: 1.5,
                        borderRadius: 5,
                        fontSize: "0.875rem",
                      }}
                    >
                      {service.price}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <AccessTime
                        fontSize="small"
                        sx={{ color: "#8B5A2B", mr: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {service.duration}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                    <Button
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{
                        color: "#8B5A2B",
                        p: 0,
                        "&:hover": {
                          bgcolor: "transparent",
                          color: "#6E4A22",
                        },
                      }}
                    >
                      Chi tiết
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <BenefitsSection />
      <AtmosphereSection />

      <StatsCounter />
      <BookingSection />
      <ScrollToTop />
    </Box>
  );
};

export default HomePage;
