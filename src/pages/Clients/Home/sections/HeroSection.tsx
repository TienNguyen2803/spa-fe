import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowForward, KeyboardArrowDown } from "@mui/icons-material";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Swiper from "swiper";

const heroSlides = [
  {
    image: "/images/hero/spa-hero-1.jpg",
    title: "Chào mừng đến với Tấm Ơi Spa",
    subtitle: "Nơi tái tạo năng lượng và thư giãn cho tâm hồn",
    cta: "Khám phá ngay",
  },
  {
    image: "/images/hero/spa-hero-2.jpg",
    title: "Trải nghiệm liệu pháp trị liệu",
    subtitle: "Kết hợp giữa y học cổ truyền và công nghệ hiện đại",
    cta: "Đặt lịch ngay",
  },
  {
    image: "/images/hero/spa-hero-3.jpg",
    title: "Chăm sóc sắc đẹp toàn diện",
    subtitle: "Với các sản phẩm từ thiên nhiên và liệu pháp độc quyền",
    cta: "Tìm hiểu thêm",
  },
];

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "80vh" : "100vh",
        overflow: "hidden",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        style={{ height: "100%" }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
                  zIndex: 1,
                },
              }}
            >
              <Box
                component="img"
                src={slide.image}
                alt={slide.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  animation: "zoomEffect 10s infinite alternate",
                  "@keyframes zoomEffect": {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.1)" },
                  },
                }}
              />
              <Container
                maxWidth="lg"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography
                  variant={isMobile ? "h3" : "h1"}
                  component="h1"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    mb: 2,
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant={isMobile ? "body1" : "h5"}
                  sx={{
                    color: "white",
                    mb: 4,
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    bgcolor: "#D4AF37",
                    "&:hover": {
                      bgcolor: "#BF9B30",
                    },
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                  }}
                >
                  {slide.cta}
                </Button>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "white",
            mb: 1,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Khám phá thêm
        </Typography>
        <KeyboardArrowDown
          sx={{
            color: "white",
            fontSize: 40,
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
  );
};
