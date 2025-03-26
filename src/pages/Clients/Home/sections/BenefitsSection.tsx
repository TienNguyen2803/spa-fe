
import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DiamondIcon from '@mui/icons-material/Diamond';
import FavoriteIcon from '@mui/icons-material/Favorite';

const benefits = [
  {
    icon: <SpaIcon sx={{ fontSize: 40, color: '#8D6E63' }} />,
    title: 'Liệu pháp tự nhiên',
    description: 'Sử dụng các sản phẩm hữu cơ và kỹ thuật truyền thống kết hợp công nghệ hiện đại.',
  },
  {
    icon: <ScheduleIcon sx={{ fontSize: 40, color: '#8D6E63' }} />,
    title: 'Thời gian linh hoạt',
    description: 'Đội ngũ chuyên nghiệp sẵn sàng phục vụ với lịch hẹn linh hoạt phù hợp với bạn.',
  },
  {
    icon: <DiamondIcon sx={{ fontSize: 40, color: '#8D6E63' }} />,
    title: 'Không gian sang trọng',
    description: 'Thiết kế nội thất cao cấp tạo không gian thư giãn tuyệt đối cho mọi giác quan.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 40, color: '#8D6E63' }} />,
    title: 'Chăm sóc cá nhân hóa',
    description: 'Mỗi liệu trình được thiết kế riêng biệt cho từng khách hàng dựa trên nhu cầu cụ thể.',
  },
];

const BenefitsSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #8D6E63 30%, #A1887F 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Tại sao chọn chúng tôi
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 700, mx: 'auto' }}>
            Chúng tôi cam kết mang đến trải nghiệm spa cao cấp và hiệu quả, giúp bạn tìm lại sự cân bằng và 
            năng lượng tích cực trong cuộc sống bận rộn.
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
