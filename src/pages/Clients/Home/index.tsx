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

import Header from "./Header";
import Footer from "./Footer";
import SocialButtons from "./SocialButtons"; // Added import statement
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import GoogleMapsComponent from "./GoogleMaps";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    {
      id: 1,
      title: "Gội đầu dưỡng sinh đông y",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600",
      description:
        "Trải nghiệm gội đầu thư giãn với các thảo dược đông y giúp nuôi dưỡng tóc chắc khỏe.",
    },
    {
      id: 2,
      title: "Massage body thư giãn - trị liệu",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600",
      description:
        "Liệu pháp massage toàn thân giúp thư giãn, giải tỏa căng thẳng và phục hồi năng lượng.",
    },
    {
      id: 3,
      title: "Massage cổ - vai - gáy chuyên sâu",
      image:
        "https://images.unsplash.com/photo-1646858171410-d4b7af7b9c0f?w=600",
      description:
        "Liệu trình 60 phút massage trị liệu cổ vai gáy giúp đánh bay stress hiệu quả.",
    },
    {
      id: 4,
      title: "Chăm sóc da mặt",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600",
      description:
        "Các liệu pháp chăm sóc da mặt chuyên sâu giúp da khỏe đẹp, rạng rỡ.",
    },
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Header /> */}
      <Box sx={{ mt: 8 }}>
        {/* Hero Banner */}
        <Box sx={{ position: "relative" }}>
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            interval={5000}
          >
            <div>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200"
                alt="Tấm Ơi Spa"
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

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", md: "60%" },
              textAlign: "center",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Tấm Ơi Spa
            </Typography>
            <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
              Nâng niu mái tóc Việt
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Bỏ lại những bộn bề cuộc sống, hối hả của công việc khi đến với
              TẤM ƠI - Nơi tận hưởng các liệu pháp chăm sóc cơ thể và tâm hồn
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#8D6E63",
                "&:hover": {
                  backgroundColor: "#6D4C41",
                },
              }}
            >
              Đặt lịch ngay
            </Button>
          </Box>
        </Box>
        {/* Welcome Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/welcome.jpg"
                alt="Không gian Tấm Ơi Spa"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ color: "#6D4C41" }}
              >
                Chào mừng đến với Tấm Ơi Spa
              </Typography>
              <Typography variant="body1" paragraph>
                Tấm Ơi - một góc bình yên giữa lòng phố thị, nơi bạn có thể
                buông bỏ tất cả để được yêu thương và vỗ về.
              </Typography>
              <Typography variant="body1" paragraph>
                Chúng tôi tự hào mang đến những liệu pháp chăm sóc cơ thể và tâm
                hồn được nghiên cứu kỹ lưỡng, kết hợp giữa y học cổ truyền và
                phương pháp hiện đại, giúp quý khách hàng cân bằng cuộc sống và
                tìm lại năng lượng tích cực.
              </Typography>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: "#8D6E63",
                  borderColor: "#8D6E63",
                  "&:hover": {
                    borderColor: "#6D4C41",
                  },
                }}
              >
                Tìm hiểu thêm
              </Button>
            </Grid>
          </Grid>
        </Container>
        {/* Services Section */}
        <Box sx={{ backgroundColor: "#F5F5F5", py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ color: "#6D4C41" }}
            >
              Dịch vụ của chúng tôi
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
              Khám phá các dịch vụ chăm sóc sức khỏe và làm đẹp tại Tấm Ơi Spa
            </Typography>

            <Grid container spacing={4}>
              {services.map((service) => (
                <Grid item xs={12} sm={6} md={3} key={service.id}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h3"
                        sx={{ color: "#6D4C41" }}
                      >
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
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
                        Chi tiết
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        {/* Booking Section */}
        <Box
          sx={{
            backgroundImage: "url(/images/booking-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            py: 8,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          />

          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
            <Paper sx={{ p: { xs: 3, md: 5 } }}>
              <Typography
                variant="h4"
                component="h2"
                align="center"
                gutterBottom
                sx={{ color: "#6D4C41" }}
              >
                Đặt lịch ngay
              </Typography>
              <Typography
                variant="body1"
                align="center"
                paragraph
                sx={{ mb: 4 }}
              >
                Để được tư vấn và đặt lịch sử dụng dịch vụ tại Tấm Ơi Spa
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Họ và tên" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Chọn chi nhánh"
                    select
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                  >
                    <option value="">Chọn chi nhánh</option>
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name} - {branch.address}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Chọn dịch vụ"
                    select
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                  >
                    <option value="">Chọn dịch vụ</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Ghi chú"
                    multiline
                    rows={3}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#8D6E63",
                      "&:hover": {
                        backgroundColor: "#6D4C41",
                      },
                      px: 4,
                    }}
                  >
                    Gửi yêu cầu
                  </Button>
                </Grid>
              </Grid>
            </Paper>
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
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
