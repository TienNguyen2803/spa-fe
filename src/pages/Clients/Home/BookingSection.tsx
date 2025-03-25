
import { Box, Container, Grid, Typography, TextField, Button, styled } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const BookingCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#B08D3C',
  borderRadius: '50%',
  width: '180px',
  height: '180px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  '& .MuiSvgIcon-root': {
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    '& .MuiSvgIcon-root': {
      transform: 'rotate(180deg)',
    },
  },
}));

const BookingForm = styled(Box)({
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  textAlign: 'center',
});

const StyledButton = styled(Button)({
  backgroundColor: '#8B5A2B',
  color: 'white',
  padding: '12px 30px',
  borderRadius: '25px',
  '&:hover': {
    backgroundColor: '#6E4A22',
  },
});

const BookingSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#FFF8DC' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <BookingForm>
              <Typography variant="h4" gutterBottom sx={{ color: '#8B5A2B', fontFamily: "'Saigon Royal Spa'" }}>
                Đặt Lịch
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: '#8B5A2B', mb: 4 }}>
                Hàng Ngàn Ưu Đãi
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    label="Họ tên" 
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '25px',
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    label="Điện thoại" 
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '25px',
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    label="Chọn dịch vụ" 
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '25px',
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    label="Nội dung" 
                    variant="outlined" 
                    multiline 
                    rows={4}
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '15px',
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledButton fullWidth>
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
                  <PhoneInTalkIcon sx={{ fontSize: 40, color: 'white', mb: 2 }} />
                  <Typography variant="body2" sx={{ color: 'white', mb: 1, textAlign: 'center', fontSize: '12px', fontWeight: 500 }}>
                    LIÊN HỆ HOTLINE
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>
                    0982279135
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', mt: 1, textAlign: 'center', fontSize: '11px', maxWidth: '140px' }}>
                    Hãy liên hệ ngay để được tư vấn miễn phí
                  </Typography>
                </BookingCard>
              </Grid>
              
              <Grid item>
                <BookingCard>
                  <CalendarTodayIcon sx={{ fontSize: 40, color: 'white', mb: 2 }} />
                  <Typography variant="body2" sx={{ color: 'white', mb: 1, textAlign: 'center', fontSize: '12px', fontWeight: 500 }}>
                    GIỜ MỞ CỬA
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, fontSize: '20px' }}>
                    9h - 19h
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', mt: 1, textAlign: 'center', fontSize: '11px', maxWidth: '140px' }}>
                    Đặt lịch ngay hôm nay để nhận hàng ngàn ưu đãi
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
