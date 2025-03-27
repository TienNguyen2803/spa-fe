
import { Create } from "@refinedev/mui";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function CreateSpaPage() {
  const [previewBanner, setPreviewBanner] = useState("");
  const [previewLogo, setPreviewLogo] = useState("");

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
      banner: {
        image_url: "",
        title: "",
        subtitle: "",
        order: 0,
        is_active: true,
        type: 0
      },
      workingHours: {
        day: "",
        open_time: "09:00",
        close_time: "18:00"
      }
    }
  });

  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fakePath = `/imgs/${file.name}`;
      setPreviewLogo(URL.createObjectURL(file));
      // TODO: Implement actual file upload
    }
  };

  const handleBannerUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fakePath = `/imgs/${file.name}`;
      setPreviewBanner(URL.createObjectURL(file));
      // TODO: Implement actual file upload
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Create>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Thông tin cơ bản</Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="Tên Spa" 
              {...register("name")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="Địa chỉ" 
              {...register("address")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="Số điện thoại" 
              {...register("phone")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="Email" 
              type="email" 
              {...register("email")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Mô tả" 
              multiline 
              rows={4} 
              {...register("description")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUpload />}
              >
                Upload Logo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleLogoUpload}
                />
              </Button>
              {previewLogo && (
                <Box mt={2}>
                  <img src={previewLogo} alt="Logo preview" style={{ maxWidth: '200px' }} />
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mt: 2 }}>Banner</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUpload />}
              >
                Upload Banner
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleBannerUpload}
                />
              </Button>
              {previewBanner && (
                <Box mt={2}>
                  <img src={previewBanner} alt="Banner preview" style={{ maxWidth: '200px' }} />
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mt: 2 }}>Thời gian làm việc</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField 
              fullWidth 
              label="Ngày" 
              {...register("workingHours.day")}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="workingHours.open_time"
                control={control}
                render={({ field }) => (
                  <TimePicker
                    label="Giờ mở cửa"
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="workingHours.close_time"
                control={control}
                render={({ field }) => (
                  <TimePicker
                    label="Giờ đóng cửa"
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mt: 2 }}>SEO</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="SEO Title" 
              {...register("seo_title")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="SEO Description" 
              {...register("seo_description")}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mt: 2 }}>Social Media</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="Facebook URL" 
              {...register("facebook_url")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              fullWidth 
              label="Instagram URL" 
              {...register("instagram_url")}
            />
          </Grid>
        </Grid>
      </form>
    </Create>
  );
}
