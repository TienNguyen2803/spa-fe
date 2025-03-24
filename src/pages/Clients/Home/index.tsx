import React from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Box, 
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      id: 1,
      title: 'Gội đầu dưỡng sinh',
      image: 'http://www.tamoispa.vn/thumbs/300x340x1/upload/news/artboard-1-2932.png',
      description: 'Trải nghiệm gội đầu thư giãn với các thảo dược đông y giúp nuôi dưỡng tóc chắc khỏe.'
    },
    {
      id: 2,
      title: 'Massage body',
      image: 'http://www.tamoispa.vn/thumbs/300x340x1/upload/news/artboard-3-7118.png',
      description: 'Liệu pháp massage toàn thân giúp thư giãn, giải tỏa căng thẳng và phục hồi năng lượng.'
    },
    {
      id: 3,
      title: 'Trị liệu theo vùng',
      image: 'http://www.tamoispa.vn/thumbs/611x337x1/upload/news/spa-tam-oi-5-5311.png',
      description: 'Liệu trình 60 phút massage trị liệu cổ vai gáy giúp đánh bay stress hiệu quả.'
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#FFFAF0' }}>
      <Header />
      <Box sx={{ mt: 8 }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Dịch vụ của chúng tôi
          </Typography>
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item key={service.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {service.title}
                    </Typography>
                    <Typography>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;