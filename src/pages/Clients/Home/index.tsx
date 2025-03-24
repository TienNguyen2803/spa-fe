import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Star, SpaOutlined, AccessTime } from "@mui/icons-material";
import Header from "./Header";
import Footer from "./Footer";
import SocialButtons from "./SocialButtons"; // Added import statement
import GoogleMapsComponent from "./GoogleMaps";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    {
      id: 1,
      title: "Gội đầu dưỡng sinh đông y",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600",
      description: "Trải nghiệm gội đầu thư giãn với các thảo dược đông y giúp nuôi dưỡng tóc chắc khỏe.",
      price: "450.000đ",
      duration: "60 phút"
    },
    {
      id: 2, 
      title: "Massage body thư giãn",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600",
      description: "Liệu pháp massage toàn thân giúp thư giãn, giải tỏa căng thẳng và phục hồi năng lượng.",
      price: "550.000đ",
      duration: "90 phút"
    },
    {
      id: 3,
      title: "Chăm sóc da mặt",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600", 
      description: "Các liệu pháp chăm sóc da mặt chuyên sâu giúp da khỏe đẹp, rạng rỡ.",
      price: "650.000đ",
      duration: "75 phút"
    },
    {
      id: 4,
      title: "Massage cổ - vai - gáy chuyên sâu",
      image:
        "https://images.unsplash.com/photo-1646858171410-d4b7af7b9c0f?w=600",
      description:
        "Liệu trình 60 phút massage trị liệu cổ vai gáy giúp đánh bay stress hiệu quả.",
      price: "350.000đ",
      duration: "60 phút"
    },
  ];

  const features = [
    {
      icon: <SpaOutlined sx={{ fontSize: 40, color: "#8D6E63" }} />,
      title: "Không gian sang trọng",
      description: "Thiết kế hiện đại, tạo cảm giác thư thái"
    },
    {
      icon: <Star sx={{ fontSize: 40, color: "#8D6E63" }} />,
      title: "Dịch vụ chuyên nghiệp", 
      description: "Đội ngũ kỹ thuật viên giàu kinh nghiệm"
    },
    {
      icon: <AccessTime sx={{ fontSize: 40, color: "#8D6E63" }} />,
      title: "Linh hoạt thời gian",
      description: "Phục vụ từ 9h-21h hàng ngày"
    }
  ];

  const branches = [
    {
      id: 1,
      name: "Chi nhánh 1",
      address: "97, Nguyễn Cư Trinh, Quận 1, TPHCM",
      phone: "0907 616 866",
    },
    {
      id: 2,
      name: "Chi nhánh 2",
      address: "85, Ca Văn Thỉnh, Phường 11, Q. Tân Bình, TP.HCM",
      phone: "0907 616 866",
    },
    {
      id: 3,
      name: "Chi nhánh 3",
      address: "141, Tân Hương, TP.HCM",
      phone: "0907 616 866",
    },
    {
      id: 4,
      name: "Chi nhánh Hải Phòng",
      address: "Hồ Nam, Q.Lê Chân, TP.Hải Phòng",
      phone: "0907 616 866",
    },
  ];

  const MotionBox = motion(Box);
  const MotionTypography = motion(Typography);
  const MotionCard = motion(Card);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      {/* Hero Section */}
      <Box sx={{ position: "relative", height: isMobile ? "70vh" : "90vh" }}>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={5000}
        >
          <Box>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200"
              alt="Tấm Ơi Spa"
              sx={{
                width: "100%",
                height: isMobile ? "70vh" : "90vh",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "80%",
                color: "white",
                zIndex: 2,
              }}
            >
              <MotionTypography
                variant={isMobile ? "h3" : "h1"}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                sx={{ fontWeight: "bold", mb: 3 }}
              >
                Tấm Ơi Spa
              </MotionTypography>
              <MotionTypography
                variant={isMobile ? "h5" : "h4"}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                sx={{ mb: 4 }}
              >
                Nâng niu mái tóc Việt
              </MotionTypography>
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#8D6E63",
                    "&:hover": { bgcolor: "#6D4C41" },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Đặt lịch ngay
                </Button>
              </MotionBox>
            </Box>
          </Box>
          <div>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=1200"
                alt="Dịch vụ spa"
                sx={{
                  width: "100%",
                  height: { xs: "50vh", md: "70vh" },
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200"
                alt="Không gian spa"
                sx={{
                  width: "100%",
                  height: { xs: "50vh", md: "70vh" },
                  objectFit: "cover",
                }}
              />
            </div>
        </Carousel>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: "#FBF7F4" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  sx={{
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  {feature.icon}
                  <Typography variant="h6" sx={{ my: 2, color: "#5D4037" }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <MotionTypography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ color: "#5D4037", mb: 6 }}
        >
          Dịch vụ nổi bật
        </MotionTypography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={service.id}>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                sx={{
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: "#5D4037" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography color="primary" variant="h6">
                      {service.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <AccessTime sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }} />
                      {service.duration}
                    </Typography>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderColor: "#8D6E63",
              color: "#8D6E63",
              "&:hover": {
                borderColor: "#6D4C41",
                bgcolor: "rgba(141, 110, 99, 0.1)",
              },
            }}
          >
            Xem tất cả dịch vụ
          </Button>
        </Box>
      </Container>

      {/* Booking Section */}
      <Box sx={{ bgcolor: "#FBF7F4", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h3" gutterBottom sx={{ color: "#5D4037" }}>
                  Đặt lịch hẹn
                </Typography>
                <Typography paragraph color="text.secondary">
                  Hãy để chúng tôi mang đến cho bạn trải nghiệm thư giãn tuyệt vời nhất.
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <TextField
                    fullWidth
                    label="Họ và tên"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      bgcolor: "#8D6E63",
                      "&:hover": { bgcolor: "#6D4C41" },
                      py: 1.5,
                    }}
                  >
                    Đặt lịch ngay
                  </Button>
                </Box>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                component="img"
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200"
                alt="Booking"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 4,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
        {/* Map Section */}
        <Box sx={{ backgroundColor: "#FFF", py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ color: "#6D4C41" }}
            >
              Vị trí các chi nhánh
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
              Tìm chi nhánh Tấm Ơi Spa gần bạn nhất
            </Typography>
            <GoogleMapsComponent />
          </Container>
        </Box>
        {/* Branches Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ color: "#6D4C41" }}
          >
            Hệ thống chi nhánh
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
            Tấm Ơi Spa hiện có mặt tại nhiều địa điểm trên toàn quốc
          </Typography>

          <Grid container spacing={4}>
            {branches.map((branch) => (
              <Grid item xs={12} sm={6} md={3} key={branch.id}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h3"
                      sx={{ color: "#6D4C41" }}
                    >
                      {branch.name}
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}
                    >
                      <LocationOnIcon sx={{ color: "#8D6E63", mr: 1 }} />
                      <Typography variant="body2">{branch.address}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <PhoneIcon sx={{ color: "#8D6E63", mr: 1 }} />
                      <Typography variant="body2">{branch.phone}</Typography>
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      sx={{
                        color: "#8D6E63",
                        "&:hover": {
                          backgroundColor: "rgba(141, 110, 99, 0.08)",
                        },
                      }}
                    >
                      Xem bản đồ
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <SocialButtons /> {/* Added SocialButtons component */}
      <Footer/>
    </Box>
  );
};

export default HomePage;