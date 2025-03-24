import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const services = [
  {
    title: "Massage Trị Liệu",
    description:
      "Giảm căng thẳng, mệt mỏi với các liệu pháp massage chuyên nghiệp",
    image: "/images/services/massage.jpg",
  },
  {
    title: "Chăm Sóc Da",
    description: "Các liệu trình chăm sóc da mặt với sản phẩm cao cấp",
    image: "/images/services/facial.jpg",
  },
  {
    title: "Gội Đầu Dưỡng Sinh",
    description: "Thư giãn với dịch vụ gội đầu kết hợp massage đầu, vai, gáy",
    image: "/images/services/hair.jpg",
  },
];

export const ServicesSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Dịch Vụ Của Chúng Tôi
        </Typography>
        <Typography variant="subtitle1" textAlign="center" mb={6}>
          Trải nghiệm dịch vụ chất lượng cao tại Tấm Ơi Spa
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
