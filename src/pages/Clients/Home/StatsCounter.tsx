
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
`;

const IconWrapper = styled(Box)({
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(180deg)',
  },
});

const StatsCounter = () => {
  const [counts, setCounts] = useState({
    satisfaction: 0,
    experience: 0,
    staff: 0
  });

  const targets = {
    satisfaction: 100,
    experience: 10,
    staff: 10
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setCounts(prev => ({
              satisfaction: prev.satisfaction < targets.satisfaction ? prev.satisfaction + 1 : prev.satisfaction,
              experience: prev.experience < targets.experience ? prev.experience + 1 : prev.experience,
              staff: prev.staff < targets.staff ? prev.staff + 1 : prev.staff
            }));
          }, 50);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Box id="stats-section" sx={{ py: 8, bgcolor: '#F8F5F1' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <IconWrapper>
              <KeyboardArrowUp sx={{ fontSize: 40, color: '#8B5A2B' }} />
            </IconWrapper>
            <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
              +{counts.satisfaction}
            </Typography>
            <Typography variant="h6">Làm đẹp từ tâm</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <IconWrapper>
              <KeyboardArrowUp sx={{ fontSize: 40, color: '#8B5A2B' }} />
            </IconWrapper>
            <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
              +{counts.experience}
            </Typography>
            <Typography variant="h6">Nhân viên tay nghề cao</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <IconWrapper>
              <KeyboardArrowUp sx={{ fontSize: 40, color: '#8B5A2B' }} />
            </IconWrapper>
            <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
              +{counts.staff}
            </Typography>
            <Typography variant="h6">Nhiều năm kinh nghiệm</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsCounter;
