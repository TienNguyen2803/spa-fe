import {
  AccessTime,
  ArrowForward,
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#6D4C41",
        color: "white",
        pt: 8,
        pb: 4,
        background: "linear-gradient(to right, #5D4037, #795548)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  background: "linear-gradient(45deg, #FFD700, #FFA726)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Tấm Ơi Spa
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#FFE0B2",
                  fontStyle: "italic",
                  mb: 2,
                }}
              >
                Nâng niu mái tóc Việt
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8 }}>
              Một góc bình yên giữa lòng phố thị, nơi bạn có thể buông bỏ tất cả
              để được yêu thương và vỗ về.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Instagram />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#FFE0B2" }}>
              Liên hệ
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Phone sx={{ mr: 2, fontSize: "1.2rem", color: "#FFB74D" }} />
                  <Typography variant="body2">Hotline: 0907 616 866</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <LocationOn
                    sx={{ mr: 2, fontSize: "1.2rem", color: "#FFB74D" }}
                  />
                  <Typography variant="body2">
                    CN1: 97, Nguyễn Cư Trinh, Quận 1, TPHCM
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email sx={{ mr: 2, fontSize: "1.2rem", color: "#FFB74D" }} />
                  <Typography variant="body2">info@tamoispa.com</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#FFE0B2" }}>
              Giờ mở cửa
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AccessTime
                  sx={{ mr: 2, fontSize: "1.2rem", color: "#FFB74D" }}
                />
                <Typography variant="body2">
                  Thứ Hai - Chủ Nhật: 9:00 - 21:00
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h6"
              gutterBottom
              sx={{ mt: 4, color: "#FFE0B2" }}
            >
              Chính sách
            </Typography>
            <Stack spacing={1.5}>
              {[
                "Chính sách đặt lịch",
                "Chính sách bán hàng",
                "Chính sách mua hàng",
                "Chính sách nhượng quyền",
              ].map((policy) => (
                <Link
                  key={policy}
                  href="#"
                  underline="none"
                  sx={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#FFB74D",
                      pl: 1,
                    },
                  }}
                >
                  <ArrowForward sx={{ mr: 1, fontSize: "0.8rem" }} />
                  <Typography variant="body2">{policy}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,0.7)",
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
