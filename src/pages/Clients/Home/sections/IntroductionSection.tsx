
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const IntroductionSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8f5f1' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070"
              alt="Spa Atmosphere"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              component="span"
              sx={{
                color: '#8D6E63',
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              CHÀO MỪNG ĐẾN VỚI
            </Typography>
            <Typography
              variant="h2"
              sx={{
                my: 2,
                background: 'linear-gradient(45deg, #8D6E63 30%, #A1887F 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Tấm Ơi Spa
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8 }}>
              Chúng tôi là điểm đến hàng đầu cho sự thư giãn và làm đẹp tại Việt Nam với hơn 10 năm kinh nghiệm.  
              Tấm Ơi Spa kết hợp giữa phương pháp truyền thống và công nghệ hiện đại, mang đến trải nghiệm 
              chăm sóc toàn diện cho cơ thể và tinh thần của bạn.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroductionSection;
