import { AccessTime, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const services = [
  {
    id: 1,
    name: "Massage Thư Giãn Toàn Thân",
    description:
      "Liệu pháp massage kết hợp các kỹ thuật Thụy Điển và Thái giúp thư giãn cơ bắp, giảm căng thẳng và cải thiện tuần hoàn máu.",
    duration: "90 phút",
    price: "850.000đ",
    rating: 4.9,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500",
    category: "Massage",
    featured: true,
  },
  {
    id: 2,
    name: "Chăm Sóc Da Mặt Cao Cấp",
    description:
      "Liệu trình chăm sóc da mặt toàn diện với các sản phẩm hữu cơ, giúp làm sạch sâu, dưỡng ẩm và trẻ hóa làn da.",
    duration: "60 phút",
    price: "750.000đ",
    rating: 4.8,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500",
    category: "Chăm sóc da",
    featured: true,
  },
  {
    id: 3,
    name: "Tắm Thảo Dược Việt Nam",
    description:
      "Trải nghiệm tắm thảo dược truyền thống Việt Nam với các loại thảo mộc quý giúp detox cơ thể, thư giãn tinh thần.",
    duration: "45 phút",
    price: "650.000đ",
    rating: 4.7,
    reviewCount: 76,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500",
    category: "Tắm thảo dược",
    featured: false,
  },
];

const ServiceCard = ({ service, isFavorite, onToggleFavorite }) => (
  <MotionCard
    elevation={2}
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: 3,
      overflow: "hidden",
    }}
    whileHover={{
      y: -10,
      boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    }}
  >
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        height="200"
        image={service.image}
        alt={service.name}
      />
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "rgba(255,255,255,0.8)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
        }}
        onClick={() => onToggleFavorite(service.id)}
      >
        {isFavorite ? (
          <Favorite sx={{ color: "#e91e63" }} />
        ) : (
          <FavoriteBorder />
        )}
      </IconButton>
      {service.featured && (
        <Chip
          label="Nổi bật"
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            backgroundColor: "#8D6E63",
            color: "white",
          }}
        />
      )}
    </Box>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>
        {service.name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Rating
          value={service.rating}
          readOnly
          size="small"
          sx={{ color: "#8D6E63" }}
        />
        <Typography variant="body2" sx={{ ml: 1 }}>
          ({service.reviewCount})
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" paragraph>
        {service.description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AccessTime fontSize="small" sx={{ mr: 0.5 }} />
          <Typography variant="body2">{service.duration}</Typography>
        </Box>
        <Typography variant="h6" color="primary">
          {service.price}
        </Typography>
      </Box>
    </CardContent>
    <CardActions sx={{ p: 2 }}>
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#8D6E63",
          "&:hover": { backgroundColor: "#6D4C41" },
        }}
      >
        Đặt lịch ngay
      </Button>
    </CardActions>
  </MotionCard>
);

const ServicesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ mb: 8, textAlign: "center" }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ color: "#8D6E63", fontWeight: "bold" }}
        >
          Dịch Vụ Của Chúng Tôi
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Khám phá các dịch vụ chăm sóc sức khỏe và làm đẹp tại Tấm Ơi Spa
        </Typography>
      </MotionBox>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} md={4} key={service.id}>
            <ServiceCard
              service={service}
              isFavorite={favorites.includes(service.id)}
              onToggleFavorite={toggleFavorite}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            borderColor: "#8D6E63",
            color: "#8D6E63",
            "&:hover": {
              borderColor: "#6D4C41",
              backgroundColor: "rgba(141,110,99,0.1)",
            },
          }}
        >
          Xem thêm dịch vụ
        </Button>
      </Box>
    </Container>
  );
};

export default ServicesPage;
