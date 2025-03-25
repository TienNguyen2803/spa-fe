
import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import StarIcon from '@mui/icons-material/Star';

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  background: 'rgba(139, 90, 43, 0.1)',
  border: '2px solid #8B5A2B',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'rotate(180deg)',
    background: 'rgba(139, 90, 43, 0.2)',
  },
}));

const StatsCounter = () => {
  const [counts, setCounts] = useState({
    satisfaction: 0,
    experience: 0,
    staff: 0,
  });

  const targets = {
    satisfaction: 100,
    experience: 10,
    staff: 10,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setCounts((prev) => ({
              satisfaction:
                prev.satisfaction < targets.satisfaction
                  ? prev.satisfaction + 1
                  : prev.satisfaction,
              experience:
                prev.experience < targets.experience
                  ? prev.experience + 1
                  : prev.experience,
              staff: prev.staff < targets.staff ? prev.staff + 1 : prev.staff,
            }));
          }, 50);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 },
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Box 
      id="stats-section" 
      sx={{ 
        py: 8, 
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <IconWrapper>
              <SpaIcon sx={{ fontSize: 60, color: '#8B5A2B' }} />
            </IconWrapper>
            <Typography variant="h3" sx={{ mb: 1, color: '#F8F5F1' }}>
              +{counts.satisfaction}
            </Typography>
            <Typography variant="h6" sx={{ color: '#F8F5F1' }}>Làm đẹp từ tâm</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <IconWrapper>
              <StarIcon sx={{ fontSize: 60, color: '#8B5A2B' }} />
            </IconWrapper>
            <Typography variant="h3" sx={{ mb: 1, color: '#F8F5F1' }}>
              +{counts.experience}
            </Typography>
            <Typography variant="h6" sx={{ color: '#F8F5F1' }}>Nhân viên tay nghề cao</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <IconWrapper>
              <FaceRetouchingNaturalIcon sx={{ fontSize: 60, color: '#8B5A2B' }} />
            </IconWrapper>
            <Typography variant="h3" sx={{ mb: 1, color: '#F8F5F1' }}>
              +{counts.staff}
            </Typography>
            <Typography variant="h6" sx={{ color: '#F8F5F1' }}>Nhiều năm kinh nghiệm</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsCounter;
