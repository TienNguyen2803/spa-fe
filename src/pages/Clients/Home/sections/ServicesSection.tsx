
import React from 'react';
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
} from '@mui/material';
import { AccessTime, ArrowForward, Star } from '@mui/icons-material';
import { motion } from 'framer-motion';

const StyledCard = styled(motion(Card))(({ theme }) => ({
  height: '100%',
  borderRadius: 16,
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  backgroundColor: '#fff',
  boxShadow: '0 8px 24px rgba(139, 90, 43, 0.12)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 32px rgba(139, 90, 43, 0.16)',
  },
}));

const ServiceImage = styled(CardMedia)({
  height: 280,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
  },
});

const PriceTag = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: 'rgba(139, 90, 43, 0.9)',
  color: 'white',
  padding: '8px 16px',
  borderRadius: 20,
  fontWeight: 600,
  zIndex: 1,
  backdropFilter: 'blur(4px)',
}));

const services = [
  {
    title: 'Massage Thư Giãn',
    description: 'Trải nghiệm liệu pháp massage độc quyền giúp giải tỏa căng thẳng và phục hồi năng lượng.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    duration: '60-90 phút',
    price: 'Từ 350.000đ',
    rating: 4.9,
  },
  {
    title: 'Chăm Sóc Da Mặt',
    description: 'Liệu trình chăm sóc da chuyên sâu với các sản phẩm từ thiên nhiên giúp làn da tươi trẻ và rạng rỡ.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    duration: '75-90 phút',
    price: 'Từ 450.000đ',
    rating: 4.8,
  },
  {
    title: 'Tắm Thảo Dược',
    description: 'Đắm mình trong hương thơm của các loại thảo dược quý giúp thanh lọc cơ thể và thư giãn tinh thần.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    duration: '90-120 phút',
    price: 'Từ 500.000đ',
    rating: 4.9,
  },
  {
    title: 'Liệu Pháp Đá Nóng',
    description: 'Kết hợp giữa massage và đá nóng giúp thư giãn cơ bắp, cải thiện tuần hoàn và giảm đau nhức.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    duration: '90 phút',
    price: 'Từ 550.000đ',
    rating: 4.7,
  },
];

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFF8E1' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#8B5A2B',
              fontWeight: 600,
              mb: 1,
              textTransform: 'uppercase',
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
              background: 'linear-gradient(45deg, #8B5A2B, #A67C52)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Trải Nghiệm Dịch Vụ Đẳng Cấp
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              mb: 2,
            }}
          >
            Khám phá các dịch vụ chăm sóc sức khỏe và sắc đẹp được thiết kế
            riêng biệt để đáp ứng nhu cầu của từng khách hàng
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box sx={{ position: 'relative' }}>
                  <ServiceImage
                    image={service.image}
                    title={service.title}
                  />
                  <PriceTag>{service.price}</PriceTag>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AccessTime
                      fontSize="small"
                      sx={{ color: '#8B5A2B', mr: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {service.duration}
                    </Typography>
                    <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                      <Star sx={{ color: '#FFB300', fontSize: 20 }} />
                      <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {service.rating}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    variant="text"
                    endIcon={<ArrowForward />}
                    sx={{
                      color: '#8B5A2B',
                      p: 0,
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: '#6E4A22',
                      },
                    }}
                  >
                    Chi tiết
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
