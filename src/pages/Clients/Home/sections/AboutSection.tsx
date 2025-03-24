
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
