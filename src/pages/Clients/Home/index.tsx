import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(http://www.tamoispa.vn/thumbs/1366x625x1/upload/photo/slide-94730.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  backgroundColor: '#FFFAF0' // Added light pink background
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
    transition: 'transform 0.3s ease-in-out'
  }
}));

export default function HomePage() {
  const services = [
    {
      title: 'Gội Đầu Dưỡng Sinh',
      image: 'http://www.tamoispa.vn/thumbs/300x340x1/upload/news/artboard-1-2932.png'
    },
    {
      title: 'Massage Body',
      image: 'http://www.tamoispa.vn/thumbs/300x340x1/upload/news/artboard-3-7118.png'
    },
    {
      title: 'Trị Liệu Theo Vùng',
      image: 'http://www.tamoispa.vn/thumbs/611x337x1/upload/news/spa-tam-oi-5-5311.png'
    }
  ];

  return (
    <Box>
      <HeroSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            Tấm Ơi Spa
          </Typography>
          <Typography variant="h4">
            Nâng niu mái tóc Việt
          </Typography>
        </Container>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Ghé chữa lành - Ghé Tấm Ơi!
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 6 }}>
          Giữa những bộn bề và lo toan của cuộc sống, giữa những áp lực công việc và gia đình… 
          bạn cần những giây phút để yêu thương và bù đắp cho chính bản thân mình.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ServiceCard>
                <CardMedia
                  component="img"
                  height="300"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    {service.title}
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="contained" color="primary" size="large">
            Xem Thêm
          </Button>
        </Box>
      </Container>
    </Box>
  );
}