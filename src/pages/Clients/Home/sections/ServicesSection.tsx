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
  borderRadius: 24,
  overflow: "hidden",
  transition: "all 0.4s ease",
  backgroundColor: "#fff",
  boxShadow: "0 8px 32px rgba(139, 90, 43, 0.08)",
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    boxShadow: "0 16px 48px rgba(139, 90, 43, 0.12)",
  },
}));

const ServiceImage = styled(CardMedia)({
  height: 320,
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
    transition: "all 0.3s ease",
  },
  "&:hover::after": {
    height: "60%",
    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
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

const FeatureTag = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 20,
  backgroundColor: "rgba(139, 90, 43, 0.08)",
  color: "#8B5A2B",
  margin: theme.spacing(0.5),
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(139, 90, 43, 0.15)",
  },
}));

const services = [
  {
    title: "Massage Thư Giãn Cao Cấp",
    description: "Trải nghiệm liệu pháp massage độc quyền kết hợp các kỹ thuật từ Đông y và tinh dầu thiên nhiên.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
    duration: "90 phút",
    price: "Từ 550.000đ",
    rating: 4.9,
    features: ["Tinh dầu organic", "Đá nóng", "Thảo dược"],
  },
  {
    title: "Chăm Sóc Da Chuyên Sâu",
    description: "Liệu trình điều trị da mặt chuyên sâu với công nghệ hiện đại và mỹ phẩm cao cấp.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
    duration: "75 phút",
    price: "Từ 450.000đ",
    rating: 4.8,
    features: ["Công nghệ hiện đại", "Mỹ phẩm cao cấp", "Massage mặt"],
  },
  {
    title: "Tắm Trắng Thảo Dược",
    description: "Tắm trắng từ thảo dược thiên nhiên giúp làn da trắng sáng, mịn màng.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    duration: "120 phút",
    price: "Từ 650.000đ",
    rating: 4.9,
    features: ["Thảo dược tự nhiên", "Dưỡng trắng", "Tẩy tế bào chết"],
  }
];

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ 
      py: { xs: 10, md: 15 }, 
      background: "linear-gradient(180deg, #FFF8E1 0%, #FFFFFF 100%)"
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: "center", 
          mb: { xs: 8, md: 10 },
          maxWidth: 900,
          mx: "auto"
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box sx={{ position: "relative" }}>
                  <ServiceImage
                    image={service.image}
                    title={service.title}
                  />
                  <PriceTag>{service.price}</PriceTag>
                </Box>

                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: "#2D3748" }}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 3, color: "#4A5568", lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    {service.features.map((feature, idx) => (
                      <FeatureTag key={idx}>
                        {feature}
                      </FeatureTag>
                    ))}
                  </Box>

                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    mb: 3,
                    gap: 2,
                    color: "#4A5568"
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <AccessTime fontSize="small" />
                      <Typography variant="body2">{service.duration}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Star fontSize="small" sx={{ color: "#F6AD55" }} />
                      <Typography variant="body2">{service.rating}</Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    endIcon={<ArrowForward />}
                    sx={{
                      mt: 2,
                      py: 1.5,
                      borderRadius: 3,
                      background: "linear-gradient(45deg, #8B5A2B, #A67C52)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 16px rgba(139, 90, 43, 0.2)",
                      },
                    }}
                  >
                    Đặt Lịch Ngay
                  </Button>
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