import { Create } from "@refinedev/mui";
import { Box, Card, Grid, TextField, Typography, Button, Checkbox, FormControlLabel, MenuItem, IconButton } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { CloudUpload, Add, Delete } from "@mui/icons-material";
import { useState } from "react";

const BANNER_TYPES = [
  { value: 0, label: "Banner chính" },
  { value: 1, label: "Banner phụ" }
];

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday", 
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export default function CreateSpaPage() {
  const [previewImage, setPreviewImage] = useState("");

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      logo_url: "",
      address: "",
      phone: "",
      email: "",
      description: "",
      seo_title: "",
      seo_description: "",
      facebook_url: "",
      instagram_url: "",
      banners: [{
        image_url: "",
        title: "",
        subtitle: "",
        order: 0,
        is_active: true,
        type: 0
      }],
      workingHours: [{
        day: "Monday",
        open_time: "09:00",
        close_time: "18:00"
      }]
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fakePath = `/imgs/${file.name}`;
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <Create>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>Thông tin cơ bản</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Tên Spa"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<CloudUpload />}
                      size="small"
                    >
                      Upload Logo
                      <input 
                        type="file" 
                        hidden 
                        accept="image/*"
                        onChange={(e) => {
                          handleImageUpload(e);
                          register('logo_url').onChange(e);
                        }}
                      />
                    </Button>
                    {previewImage && (
                      <Box component="img" src={previewImage} alt="Preview" sx={{ width: 100, height: 100, objectFit: 'cover' }} />
                    )}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Địa chỉ"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Số điện thoại"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Email"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Mô tả"
                        multiline
                        rows={4}
                        size="small"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>SEO & Social Media</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="seo_title"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="SEO Title"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="seo_description"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="SEO Description"
                        multiline
                        rows={2}
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="facebook_url"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Facebook URL"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="instagram_url"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Instagram URL"
                        size="small"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Banners</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="banners.0.image_url"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="file"
                        fullWidth
                        label="Banner URL"
                        size="small"
                        onChange={e => {
                          field.onChange(e.target.files[0])
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="banners.0.title"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Tiêu đề"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="banners.0.subtitle"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Phụ đề"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Controller
                    name="banners.0.order"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Thứ tự"
                        type="number"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Controller
                    name="banners.0.type"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        select
                        fullWidth
                        label="Loại"
                        size="small"
                      >
                        {BANNER_TYPES.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Controller
                    name="banners.0.is_active"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            checked={field.value}
                          />
                        }
                        label="Kích hoạt"
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>Giờ làm việc</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Controller
                    name="workingHours.0.day"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Ngày làm việc"
                        size="small"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Controller
                    name="workingHours.0.open_time"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Giờ mở cửa"
                        type="time"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Controller
                    name="workingHours.0.close_time"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Giờ đóng cửa"
                        type="time"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
    </Create>
  );
}