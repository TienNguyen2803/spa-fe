import { Create } from "@refinedev/mui";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function CreateSpaPage() {
  const [previewBanner, setPreviewBanner] = useState("");
  const [previewLogo, setPreviewLogo] = useState("");

  const { register, handleSubmit } = useForm({
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
        type: 0,
      },
      workingHours: {
        day: "",
        open_time: "09:00",
        close_time: "18:00",
      },
    },
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
    // TODO: Handle form submission
  };

  return (
    <Create saveButtonProps={{ onClick: handleSubmit(onSubmit) }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Thông tin cơ bản
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  {...register("name")}
                  fullWidth
                  label="Tên Spa"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                      onChange={handleLogoUpload}
                    />
                  </Button>
                  {previewLogo && (
                    <Box
                      component="img"
                      src={previewLogo}
                      alt="Preview"
                      sx={{ width: 100, height: 100, objectFit: "cover" }}
                    />
                  )}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("address")}
                  fullWidth
                  label="Địa chỉ"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("phone")}
                  fullWidth
                  label="Số điện thoại"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email")}
                  fullWidth
                  label="Email"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("description")}
                  fullWidth
                  label="Mô tả"
                  multiline
                  rows={4}
                  size="small"
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Banner
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<CloudUpload />}
                    size="small"
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
                    <Box
                      component="img"
                      src={previewBanner}
                      alt="Preview"
                      sx={{ width: 200, height: 100, objectFit: "cover" }}
                    />
                  )}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("banner.title")}
                  fullWidth
                  label="Tiêu đề"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("banner.subtitle")}
                  fullWidth
                  label="Phụ đề"
                  size="small"
                />
              </Grid>
            </Grid>
          </Card>

          <Card sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Thời gian làm việc
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  {...register("workingHours.day")}
                  fullWidth
                  label="Ngày"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  {...register("workingHours.open_time")}
                  fullWidth
                  label="Giờ mở cửa"
                  size="small"
                  type="time"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  {...register("workingHours.close_time")}
                  fullWidth
                  label="Giờ đóng cửa"
                  size="small"
                  type="time"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Create>
  );
}