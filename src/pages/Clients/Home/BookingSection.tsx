
import { Box, Container, Grid, Typography, TextField, Button, styled } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const BookingCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#DAA520',
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
    '& .icon': {
      transform: 'rotate(180deg)',
    },
  },
}));

const IconWrapper = styled(Box)({
  transition: 'transform 0.3s ease',
});

const BookingForm = styled(Box)({
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
});

const StyledButton = styled(Button)({
  backgroundColor: '#DAA520',
  color: 'white',
  padding: '10px 30px',
  '&:hover': {
    backgroundColor: '#B8860B',
  },
});

const BookingSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#FFF8DC' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <BookingForm>
              <Typography variant="h4" gutterBottom sx={{ color: '#DAA520', textAlign: 'center' }}>
                Đặt Lịch
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: '#DAA520', textAlign: 'center', mb: 3 }}>
                Hàng Ngàn Ưu Đãi
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Họ tên" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Điện thoại" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Chọn dịch vụ" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Nội dung" variant="outlined" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <StyledButton fullWidth variant="contained">
                    ĐĂNG KÝ NGAY
                  </StyledButton>
                </Grid>
              </Grid>
            </BookingForm>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <BookingCard>
                  <IconWrapper className="icon">
                    <PhoneInTalkIcon sx={{ fontSize: 40, color: 'white' }} />
                  </IconWrapper>
                  <Typography variant="body1" sx={{ color: 'white', mt: 1 }}>
                    Hotline
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    0982279135
                  </Typography>
                </BookingCard>
              </Grid>
              
              <Grid item>
                <BookingCard>
                  <IconWrapper className="icon">
                    <CalendarTodayIcon sx={{ fontSize: 40, color: 'white' }} />
                  </IconWrapper>
                  <Typography variant="body1" sx={{ color: 'white', mt: 1 }}>
                    Giờ mở cửa
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    9h - 19h
                  </Typography>
                </BookingCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookingSection;
