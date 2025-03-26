import { Close, NavigateBefore, NavigateNext } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionGrid = motion(Grid);

const GalleryPage = () => {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const imageCategories = [
    { id: "all", label: "Tất cả" },
    { id: "space", label: "Không gian" },
    { id: "service", label: "Dịch vụ" },
    { id: "customer", label: "Khách hàng" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
      alt: "Không gian spa",
      category: "space",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
      alt: "Dịch vụ massage",
      category: "service",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
      alt: "Liệu trình spa",
      category: "service",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      alt: "Khách hàng hạnh phúc",
      category: "customer",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Ngọc Anh",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      comment: "Dịch vụ tuyệt vời, nhân viên nhiệt tình",
      date: "15/03/2024",
    },
    {
      id: 2,
      name: "Minh Tú",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 4,
      comment: "Không gian rất thư giãn và thoải mái",
      date: "10/03/2024",
    },
  ];

  const handleOpenLightbox = (image) => {
    setCurrentImage(image);
    setOpenLightbox(true);
  };

  const handleCloseLightbox = () => {
    setOpenLightbox(false);
  };

  const handleNavigate = (direction) => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === currentImage.id
    );
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % galleryImages.length
        : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImage(galleryImages[newIndex]);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ mb: 8, textAlign: "center" }}
      >
        <Typography
          variant="h2"
          sx={{ color: "#8D6E63", fontWeight: "bold", mb: 2 }}
        >
          Thư Viện Hình Ảnh
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Khám phá không gian và dịch vụ tại Tấm Ơi Spa
        </Typography>
      </MotionBox>

      {/* Categories */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4, gap: 1 }}>
        {imageCategories.map((category) => (
          <Chip
            key={category.id}
            label={category.label}
            onClick={() => setSelectedCategory(category.id)}
            color={selectedCategory === category.id ? "primary" : "default"}
            sx={{
              backgroundColor:
                selectedCategory === category.id ? "#8D6E63" : undefined,
              "&:hover": {
                backgroundColor:
                  selectedCategory === category.id ? "#6D4C41" : undefined,
              },
            }}
          />
        ))}
      </Box>

      {/* Gallery Grid */}
      <MotionGrid container spacing={3}>
        {galleryImages
          .filter(
            (img) =>
              selectedCategory === "all" || img.category === selectedCategory
          )
          .map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <MotionBox
                whileHover={{ scale: 1.03 }}
                sx={{
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: 2,
                  boxShadow: 1,
                  height: 250,
                }}
                onClick={() => handleOpenLightbox(image)}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </MotionBox>
            </Grid>
          ))}
      </MotionGrid>

      {/* Reviews Section */}
      <Box sx={{ mt: 10, mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            color: "#8D6E63",
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
          }}
        >
          Đánh Giá Từ Khách Hàng
        </Typography>
        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Grid item xs={12} md={6} key={review.id}>
              <MotionCard
                elevation={2}
                sx={{ height: "100%" }}
                whileHover={{ y: -5 }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      src={review.avatar}
                      sx={{ width: 50, height: 50, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{review.name}</Typography>
                      <Rating value={review.rating} readOnly size="small" />
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {review.comment}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {review.date}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Lightbox */}
      <Dialog
        open={openLightbox}
        onClose={handleCloseLightbox}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: "relative", bgcolor: "black" }}>
          <IconButton
            onClick={handleCloseLightbox}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
            }}
          >
            <Close />
          </IconButton>

          <IconButton
            onClick={() => handleNavigate("prev")}
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
            }}
          >
            <NavigateBefore />
          </IconButton>

          <IconButton
            onClick={() => handleNavigate("next")}
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
            }}
          >
            <NavigateNext />
          </IconButton>

          {currentImage && (
            <Box
              component="img"
              src={currentImage.src}
              alt={currentImage.alt}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default GalleryPage;
