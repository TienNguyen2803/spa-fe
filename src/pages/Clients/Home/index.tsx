
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Box, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  TextField,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';

// Import icons
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SpaIcon from '@mui/icons-material/Spa';
import EventNoteIcon from '@mui/icons-material/EventNote';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawerOpen(open);
  };

  const services = [
    {
      id: 1,
      title: 'Gội đầu dưỡng sinh',
      image: 'http://www.tamoispa.vn/thumbs/300x340x1/upload/news/artboard-1-2932.png',
      description: 'Trải nghiệm gội đầu thư giãn với các thảo dược đông y giúp nuôi dưỡng tóc chắc khỏe.'
    },
    {
      id: 2,
      title: 'Massage body',
      image: 'http://www.tamoispa.vn/thumbs/300x340x1/upload/news/artboard-3-7118.png',
      description: 'Liệu pháp massage toàn thân giúp thư giãn, giải tỏa căng thẳng và phục hồi năng lượng.'
    },
    {
      id: 3,
      title: 'Trị liệu theo vùng',
      image: 'http://www.tamoispa.vn/thumbs/611x337x1/upload/news/spa-tam-oi-5-5311.png',
      description: 'Liệu trình 60 phút massage trị liệu cổ vai gáy giúp đánh bay stress hiệu quả.'
    }
  ];

  const branches = [
    {
      id: 1,
      name: 'Chi nhánh 1',
      address: '141 Tân Hương, Tân Quý, Tân Phú, Hồ Chí Minh',
      phone: '0907 616 866'
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#FFFAF0' }}>
      <AppBar position="static" sx={{ bgcolor: '#8D6E63' }}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                Tấm Ơi Spa
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <SpaIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Tấm Ơi Spa
              </Typography>
              <Button color="inherit">Trang chủ</Button>
              <Button color="inherit">Dịch vụ</Button>
              <Button color="inherit">Tin tức</Button>
              <Button color="inherit">Về chúng tôi</Button>
              <Button color="inherit">Liên hệ</Button>
              <Button color="inherit" variant="outlined" startIcon={<EventNoteIcon />}>
                Đặt lịch
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <Box sx={{ p: 2, bgcolor: '#8D6E63', color: 'white' }}>
            <Typography variant="h6">Tấm Ơi Spa</Typography>
            <Typography variant="subtitle2">Nâng niu mái tóc Việt</Typography>
          </Box>
          <List>
            {['Trang chủ', 'Dịch vụ', 'Tin tức', 'Về chúng tôi', 'Liên hệ', 'Đặt lịch'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <SpaIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ 
        backgroundImage: 'url(http://www.tamoispa.vn/thumbs/1366x625x1/upload/photo/slide-94730.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0,0,0,0.4)'
        }} />
        <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', p: 3 }}>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Tấm Ơi Spa
          </Typography>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Nâng niu mái tóc Việt
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: '#8D6E63',
              '&:hover': { bgcolor: '#6D4C41' }
            }}
          >
            Đặt lịch ngay
          </Button>
        </Box>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#6D4C41' }}>
          Dịch vụ của chúng tôi
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {services.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
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

      <Box sx={{ bgcolor: '#6D4C41', color: 'white', py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Tấm Ơi Spa</Typography>
              <Typography variant="body2" paragraph>
                Một góc bình yên giữa lòng phố thị, nơi bạn có thể thư giãn và được chăm sóc tận tình.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton sx={{ color: 'white', mr: 1 }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
            {branches.map((branch) => (
              <Grid item key={branch.id} xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Liên hệ</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">{branch.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">{branch.address}</Typography>
                </Box>
              </Grid>
            ))}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Giờ mở cửa</Typography>
              <Typography variant="body2">
                Thứ 2 - Chủ nhật: 9:00 - 21:00
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
