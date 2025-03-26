
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const BookingCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: "#B08D3C",
  borderRadius: "25px",
  width: "100%",
  maxWidth: "250px",
  aspectRatio: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  WebkitAppearance: "none",
  WebkitBorderRadius: "25px",
  "& .MuiSvgIcon-root": {
    transition: "transform 0.3s ease",
  },
  "&:hover": {
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    "& .MuiSvgIcon-root": {
      transform: "rotate(180deg)",
    },
  },
}));

const BookingForm = styled(Box)({
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "15px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  textAlign: "center",
  WebkitAppearance: "none",
  WebkitBorderRadius: "15px",
  position: "relative",
  zIndex: 1,
  margin: "1rem",
  "@media (max-width: 600px)": {
    margin: "0.5rem",
    padding: "1.5rem",
  }
});

const StyledButton = styled(Button)({
  backgroundColor: "#8B5A2B",
  color: "white",
  padding: "12px 30px",
  borderRadius: "25px",
  WebkitAppearance: "none",
  WebkitBorderRadius: "25px",
  "&:hover": {
    backgroundColor: "#6E4A22",
  },
});

const BookingSection = () => {
  return (
    <Box sx={{ 
  py: 8, 
  bgcolor: "#FFF8DC", 
  overflow: "hidden", 
  WebkitOverflowScrolling: "touch",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFF8DC",
    zIndex: 0
  }
}}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <BookingForm>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "#8B5A2B", fontFamily: "'Saigon Royal Spa'" }}
              >
                Đặt Lịch
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "#8B5A2B", mb: 4 }}
              >
                Hàng Ngàn Ưu Đãi
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Họ tên"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "25px",
                        WebkitAppearance: "none",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Điện thoại"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "25px",
                        WebkitAppearance: "none",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Chọn dịch vụ"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "25px",
                        WebkitAppearance: "none",
                      },
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
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "15px",
                        WebkitAppearance: "none",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledButton fullWidth>ĐĂNG KÝ NGAY</StyledButton>
                </Grid>
              </Grid>
            </BookingForm>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            <BookingCard>
              <PhoneInTalkIcon sx={{ fontSize: 40, color: "white", mb: 2 }} />
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  mb: 1,
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                LIÊN HỆ HOTLINE
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                0982279135
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  mt: 1,
                  textAlign: "center",
                  fontSize: "11px",
                  maxWidth: "140px",
                }}
              >
                Hãy liên hệ ngay để được tư vấn miễn phí
              </Typography>
            </BookingCard>

            <BookingCard>
              <CalendarTodayIcon sx={{ fontSize: 40, color: "white", mb: 2 }} />
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  mb: 1,
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                GIỜ MỞ CỬA
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                9h - 19h
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  mt: 1,
                  textAlign: "center",
                  fontSize: "11px",
                  maxWidth: "140px",
                }}
              >
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
