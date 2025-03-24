
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export const AboutSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom>
              Về Tấm Ơi Spa
            </Typography>
            <Typography variant="body1" paragraph>
              Tấm Ơi Spa là điểm đến lý tưởng cho những ai tìm kiếm sự thư giãn và chăm sóc sức khỏe toàn diện. Chúng tôi tự hào mang đến các dịch vụ chất lượng cao với đội ngũ chuyên gia nhiều kinh nghiệm.
            </Typography>
            <Typography variant="body1">
              Với phương châm "Nâng niu mái tóc Việt", chúng tôi không ngừng nỗ lực để mang đến những trải nghiệm tốt nhất cho khách hàng thông qua việc kết hợp giữa các phương pháp truyền thống và công nghệ hiện đại.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about/spa-about.jpg"
              alt="Về Tấm Ơi Spa"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      title: "Chất Lượng Hàng Đầu",
      description: "Chúng tôi cam kết mang đến dịch vụ spa chất lượng cao nhất cho khách hàng"
    },
    {
      title: "Đội Ngũ Chuyên Nghiệp",
      description: "Nhân viên được đào tạo chuyên sâu và có nhiều năm kinh nghiệm"
    },
    {
      title: "Công Nghệ Hiện Đại",
      description: "Áp dụng các công nghệ và thiết bị spa tiên tiến nhất"
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600, color: '#8D6E63' }}
            >
              Về Tấm Ơi Spa
            </Typography>
            <Typography variant="body1" paragraph>
              Tấm Ơi Spa là điểm đến lý tưởng cho những ai tìm kiếm sự thư giãn và chăm sóc sức khỏe toàn diện. 
              Với không gian sang trọng và yên tĩnh, chúng tôi mang đến trải nghiệm spa đẳng cấp.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <MotionCard
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    sx={{ height: '100%' }}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ color: '#8D6E63' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
