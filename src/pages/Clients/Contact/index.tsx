
import React, { useState, useRef } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Card,
  CardContent,
  InputAdornment,
  MenuItem,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
  FormControlLabel,
  Checkbox,
  IconButton,
  Divider
} from '@mui/material';
import { 
  Phone, 
  Email, 
  LocationOn, 
  AccessTime, 
  Send,
  WhatsApp,
  Facebook,
  Instagram,
  YouTube,
  Check,
  CalendarToday
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionGrid = motion(Grid);

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const mapRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    subscribe: true
  });
  
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const spaLocations = [
    {
      id: 1,
      name: 'Tấm Ơi Spa - Quận 1',
      address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
      phone: '028 3822 1234',
      email: 'quan1@tamoispa.vn',
      hours: '09:00 - 21:00 (Thứ 2 - Chủ nhật)',
      map: 'https://maps.google.com/maps?q=123+Nguyen+Hue+HCMC&output=embed'
    },
    {
      id: 2,
      name: 'Tấm Ơi Spa - Quận 3',
      address: '45 Võ Văn Tần, Quận 3, TP.HCM',
      phone: '028 3822 5678',
      email: 'quan3@tamoispa.vn',
      hours: '09:00 - 21:00 (Thứ 2 - Chủ nhật)',
      map: 'https://maps.google.com/maps?q=45+Vo+Van+Tan+HCMC&output=embed'
    }
  ];
  
  const serviceOptions = [
    { value: 'massage', label: 'Massage Thư Giãn' },
    { value: 'facial', label: 'Chăm Sóc Da Mặt' },
    { value: 'body', label: 'Chăm Sóc Cơ Thể' },
    { value: 'herbal', label: 'Tắm Thảo Dược' }
  ];
  
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Vui lòng điền đầy đủ thông tin bắt buộc',
        severity: 'error'
      });
      return;
    }
    
    setTimeout(() => {
      setSnackbar({
        open: true,
        message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.',
        severity: 'success'
      });
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: '',
        subscribe: true
      });
    }, 1000);
  };

  const [selectedLocation, setSelectedLocation] = useState(spaLocations[0]);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ textAlign: 'center', mb: 8 }}
      >
        <Typography variant="h2" sx={{ color: '#8D6E63', fontWeight: 'bold', mb: 2 }}>
          Liên Hệ
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Hãy để chúng tôi lắng nghe và chăm sóc bạn
        </Typography>
      </MotionBox>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {[
          { icon: <Phone />, title: 'Điện thoại', content: '1900 6789', sub: 'Hotline 24/7' },
          { icon: <Email />, title: 'Email', content: 'info@tamoispa.vn', sub: 'Phản hồi trong 24h' },
          { icon: <AccessTime />, title: 'Giờ mở cửa', content: '09:00 - 21:00', sub: 'Tất cả các ngày' }
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <MotionCard
              elevation={3}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              sx={{ height: '100%', borderRadius: 2 }}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ color: '#8D6E63', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" gutterBottom>{item.title}</Typography>
                <Typography variant="h5" sx={{ mb: 1 }}>{item.content}</Typography>
                <Typography variant="body2" color="textSecondary">{item.sub}</Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ color: '#6D4C41' }}>
            Chi Nhánh
          </Typography>
          <Box sx={{ mb: 4 }}>
            {spaLocations.map((location, index) => (
              <MotionCard
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                sx={{
                  mb: 2,
                  cursor: 'pointer',
                  borderLeft: selectedLocation.id === location.id ? '4px solid #8D6E63' : 'none'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>{location.name}</Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationOn sx={{ mr: 1, color: '#8D6E63' }} />
                        <Typography>{location.address}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Phone sx={{ mr: 1, color: '#8D6E63' }} />
                        <Typography>{location.phone}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </MotionCard>
            ))}
          </Box>

          <iframe
            ref={mapRef}
            src={selectedLocation.map}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
            title="Location map"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ color: '#6D4C41' }}>
            Gửi Tin Nhắn
          </Typography>
          
          <Card sx={{ p: 3, borderRadius: 2 }}>
            {formSubmitted ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Check sx={{ fontSize: 60, color: '#4CAF50', mb: 2 }} />
                <Typography variant="h5" gutterBottom>Cảm ơn bạn!</Typography>
                <Typography color="textSecondary" paragraph>
                  Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                </Typography>
                <Button 
                  variant="outlined"
                  onClick={() => setFormSubmitted(false)}
                  sx={{ mt: 2 }}
                >
                  Gửi tin nhắn khác
                </Button>
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Họ và tên *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Số điện thoại *"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Dịch vụ quan tâm"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      {serviceOptions.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nội dung tin nhắn *"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.subscribe}
                          onChange={handleChange}
                          name="subscribe"
                          color="primary"
                        />
                      }
                      label="Đăng ký nhận thông tin ưu đãi mới"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      sx={{
                        bgcolor: '#8D6E63',
                        '&:hover': { bgcolor: '#6D4C41' }
                      }}
                      endIcon={<Send />}
                    >
                      Gửi tin nhắn
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;
