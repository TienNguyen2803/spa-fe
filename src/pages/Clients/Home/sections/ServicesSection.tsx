import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import { AccessTime, ArrowForward, Star } from "@mui/icons-material";
import { motion } from "framer-motion";

const StyledCard = styled(motion(Card))(({ theme }) => ({
  height: "100%",
  borderRadius: 16,
  overflow: "hidden",
  transition: "all 0.3s ease",
  backgroundColor: "#fff",
  boxShadow: "0 8px 24px rgba(139, 90, 43, 0.12)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 16px 32px rgba(139, 90, 43, 0.16)",
  },
}));

const ServiceImage = styled(CardMedia)({
  height: 280,
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
    background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
  },
});

const PriceTag = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 16,
  right: 16,
  backgroundColor: "rgba(139, 90, 43, 0.9)",
  color: "white",
  padding: "8px 16px",
  borderRadius: 20,
  fontWeight: 600,
  zIndex: 1,
  backdropFilter: "blur(4px)",
}));

const services = [
  {
    title: "Massage Thư Giãn",
    description:
      "Trải nghiệm liệu pháp massage độc quyền giúp giải tỏa căng thẳng và phục hồi năng lượng.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    duration: "60-90 phút",
    price: "Từ 350.000đ",
    rating: 4.9,
  },
  {
    title: "Chăm Sóc Da Mặt",
    description:
      "Liệu trình chăm sóc da chuyên sâu với các sản phẩm từ thiên nhiên giúp làn da tươi trẻ và rạng rỡ.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    duration: "75-90 phút",
    price: "Từ 450.000đ",
    rating: 4.8,
  },
  {
    title: "Tắm Thảo Dược",
    description:
      "Đắm mình trong hương thơm của các loại thảo dược quý giúp thanh lọc cơ thể và thư giãn tinh thần.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    duration: "90-120 phút",
    price: "Từ 500.000đ",
    rating: 4.9,
  },
  {
    title: "Liệu Pháp Đá Nóng",
    description:
      "Kết hợp giữa massage và đá nóng giúp thư giãn cơ bắp, cải thiện tuần hoàn và giảm đau nhức.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    duration: "90 phút",
    price: "Từ 550.000đ",
    rating: 4.7,
  },
];

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFF8E1" }}>
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
              background: "linear-gradient(45deg, #8B5A2B, #A67C52)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
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

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ minHeight: { xs: "450px", sm: "auto" } }}
            >
              <StyledCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box sx={{ position: "relative" }}>
                  <ServiceImage image={service.image} title={service.title} />
                  <PriceTag>{service.price}</PriceTag>
                </Box>
                <CardContent
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    position: "relative",
                    minHeight: { xs: "200px", sm: "250px" },
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      bgcolor: "rgba(141, 110, 99, 0.08)",
                      borderRadius: 1,
                      p: 1,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <AccessTime fontSize="small" sx={{ color: "#8B5A2B" }} />
                      <Typography
                        component="span"
                        sx={{
                          color: "#8D6E63",
                          letterSpacing: 2,
                          textTransform: "uppercase",
                        }}
                      >
                        {service.duration}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <Star sx={{ color: "#FFB300", fontSize: 20 }} />
                      <Typography
                        component="span"
                        sx={{
                          color: "#8D6E63",
                          fontWeight: 600,
                          letterSpacing: 2,
                          textTransform: "uppercase",
                        }}
                      >
                        {service.rating}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      mb: 1.5,
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      color: "#000000",
                      flexGrow: 1,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      component="span"
                      endIcon={<ArrowForward />}
                      sx={{
                        color: "#000000",
                        "&:hover": {
                          bgcolor: "rgba(139, 90, 43, 0.08)",
                          color: "#6E4A22",
                        },
                      }}
                    >
                      Chi tiết
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
