
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      title: "Massage Body",
      description: "Thư giãn toàn thân với các liệu pháp massage chuyên nghiệp",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
    },
    {
      title: "Chăm Sóc Da",
      description: "Các liệu trình chăm sóc da mặt chuyên sâu",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881"
    },
    {
      title: "Trị Liệu",
      description: "Điều trị các vấn đề về cơ xương khớp",
      image: "https://images.unsplash.com/photo-1542848284-8afa78a08ccb"
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, color: '#8D6E63', mb: 6 }}
        >
          Dịch Vụ Của Chúng Tôi
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{ height: '100%' }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#8D6E63' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
