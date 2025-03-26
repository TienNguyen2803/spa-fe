
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  styled,
  Paper,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";

const BookingCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#B08D3C",
  borderRadius: "30px",
  width: "100%",
  maxWidth: "280px",
  aspectRatio: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.4s ease",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(176, 141, 60, 0.3)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
    zIndex: 1,
  },
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(176, 141, 60, 0.4)",
    "& .MuiSvgIcon-root": {
      transform: "scale(1.2) rotate(10deg)",
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    "&.Mui-focused": {
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 4px 15px rgba(176, 141, 60, 0.2)",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(176, 141, 60, 0.3)",
  },
  "& .MuiInputLabel-root": {
    color: "#666",
  },
}));

const BookingForm = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  padding: theme.spacing(4),
  borderRadius: "30px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
  backdropFilter: "blur(10px)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "5px",
    background: "linear-gradient(90deg, #B08D3C 0%, #8B5A2B 100%)",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#B08D3C",
  color: "white",
  padding: "12px 30px",
  borderRadius: "15px",
  fontSize: "1rem",
  fontWeight: 600,
  letterSpacing: "1px",
  transition: "all 0.3s ease",
  textTransform: "none",
  boxShadow: "0 4px 15px rgba(176, 141, 60, 0.3)",
  "&:hover": {
    backgroundColor: "#8B5A2B",
    boxShadow: "0 8px 25px rgba(176, 141, 60, 0.4)",
    transform: "translateY(-2px)",
  },
}));

const BookingSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #FFF8DC 0%, #FFF5E6 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <BookingForm
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#8B5A2B",
                  fontWeight: 700,
                  textAlign: "center",
                  mb: 1,
                }}
              >
                Đặt Lịch Ngay
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#666",
                  textAlign: "center",
                  mb: 4,
                }}
              >
                Trải nghiệm dịch vụ cao cấp cùng những ưu đãi đặc biệt
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Họ và tên"
                    variant="outlined"
                    placeholder="Nhập họ tên của bạn"
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Số điện thoại"
                    variant="outlined"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Chọn dịch vụ"
                    variant="outlined"
                    placeholder="Chọn dịch vụ bạn quan tâm"
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="">Chọn dịch vụ</option>
                    <option value="massage">Massage Thư Giãn</option>
                    <option value="facial">Chăm Sóc Da Mặt</option>
                    <option value="spa">Tắm Thảo Dược</option>
                    <option value="stone">Liệu Pháp Đá Nóng</option>
                  </StyledTextField>
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Ghi chú"
                    variant="outlined"
                    multiline
                    rows={4}
                    placeholder="Nhập yêu cầu đặc biệt của bạn (nếu có)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledButton fullWidth size="large">
                    Đặt Lịch Ngay
                  </StyledButton>
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
            <BookingCard
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <PhoneInTalkIcon
                sx={{
                  fontSize: 48,
                  color: "white",
                  mb: 2,
                  transition: "all 0.3s ease",
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  color: "white",
                  mb: 1,
                  letterSpacing: 1,
                  fontWeight: 600,
                }}
              >
                LIÊN HỆ HOTLINE
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                0982279135
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  textAlign: "center",
                  maxWidth: 200,
                }}
              >
                Tư vấn miễn phí 24/7
              </Typography>
            </BookingCard>

            <BookingCard
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AccessTimeIcon
                sx={{
                  fontSize: 48,
                  color: "white",
                  mb: 2,
                  transition: "all 0.3s ease",
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  color: "white",
                  mb: 1,
                  letterSpacing: 1,
                  fontWeight: 600,
                }}
              >
                GIỜ MỞ CỬA
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                9h - 19h
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  textAlign: "center",
                  maxWidth: 200,
                }}
              >
                Tất cả các ngày trong tuần
              </Typography>
            </BookingCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookingSection;
