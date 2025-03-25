
import { Box, Container, Grid, Typography, Button, styled } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';

const BookingCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'white',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  textAlign: 'center',
}));

const BookingSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <BookingCard>
              <PhoneIcon sx={{ fontSize: 40, color: '#8B5A2B', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Liên hệ hotline
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                0938296337
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hãy liên hệ ngay để được tư vấn mọi thắc mắc
              </Typography>
            </BookingCard>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <BookingCard>
              <AccessTimeIcon sx={{ fontSize: 40, color: '#8B5A2B', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Giờ mở cửa
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                9h - 19h
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Đặt lịch ngay hôm nay để nhận hàng ngàn ưu đãi
              </Typography>
            </BookingCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookingSection;
