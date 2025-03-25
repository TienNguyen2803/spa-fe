import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";

// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#6D4C41", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Tấm Ơi Spa
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Nâng niu mái tóc Việt
            </Typography>
            <Typography variant="body2" paragraph>
              Một góc bình yên giữa lòng phố thị, nơi bạn có thể buông bỏ tất cả
              để được yêu thương và vỗ về.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ color: "white", mr: 1 }}>
                {/* <FacebookIcon /> */}
              </IconButton>
              <IconButton sx={{ color: "white", mr: 1 }}>
                {/* <InstagramIcon /> */}
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Liên hệ
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              {/* <PhoneIcon sx={{ mr: 1, fontSize: '1rem' }} /> */}
              <Typography variant="body2">Hotline: 0907 616 866</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
              {/* <LocationOnIcon sx={{ mr: 1, fontSize: '1rem' }} /> */}
              <Typography variant="body2">
                CN1: 97, Nguyễn Cư Trinh, Quận 1, TPHCM
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Giờ mở cửa
            </Typography>
            <Typography variant="body2" paragraph>
              Thứ Hai - Chủ Nhật: 9:00 - 21:00
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Chính sách
            </Typography>
            <Typography variant="body2" component="div">
              <Box component="span" sx={{ display: "block", mb: 0.5 }}>
                Chính sách đặt lịch
              </Box>
              <Box component="span" sx={{ display: "block", mb: 0.5 }}>
                Chính sách bán hàng
              </Box>
              <Box component="span" sx={{ display: "block", mb: 0.5 }}>
                Chính sách mua hàng
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                Chính sách nhượng quyền
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderTop: 1,
            borderColor: "rgba(255,255,255,0.2)",
            mt: 4,
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Tấm Ơi Spa. Tất cả quyền được bảo lưu.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
