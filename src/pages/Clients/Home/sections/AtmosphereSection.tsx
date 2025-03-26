
import React from 'react';
import { Box, Container, Grid, Typography, Chip } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import DiamondIcon from '@mui/icons-material/Diamond';

const AtmosphereSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8f5f1' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #8D6E63 30%, #A1887F 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Không gian thư giãn tuyệt đối
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 3 }}>
              Bước vào Tấm Ơi Spa là bạn đã bước vào một thế giới khác - nơi mọi giác quan đều được 
              chăm sóc và nuông chiều. Âm nhạc nhẹ nhàng, hương thơm tinh dầu tự nhiên và không gian 
              được thiết kế tỉ mỉ sẽ đưa bạn vào trạng thái thư giãn sâu ngay từ giây phút đầu tiên.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Chip
                icon={<SpaIcon />}
                label="Liệu pháp tự nhiên"
                sx={{
                  bgcolor: '#F8F5F1',
                  color: '#8D6E63',
                  '& .MuiChip-icon': { color: '#8D6E63' },
                }}
              />
              <Chip
                icon={<DiamondIcon />}
                label="Dịch vụ cao cấp"
                sx={{
                  bgcolor: '#F8F5F1',
                  color: '#8D6E63',
                  '& .MuiChip-icon': { color: '#8D6E63' },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070"
                  alt="Spa Interior"
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070"
                  alt="Spa Treatment"
                  sx={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974"
                  alt="Spa Products"
                  sx={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1596178060671-7a58c7f4bdd2?q=80&w=1780"
                  alt="Spa Ambience"
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AtmosphereSection;
