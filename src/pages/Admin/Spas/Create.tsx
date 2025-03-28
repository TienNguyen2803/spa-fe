import { List } from "@refinedev/mui";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { DateTimePicker } from "@mui/x-date-pickers";
import { CloudUpload, Preview, Add, Delete } from "@mui/icons-material";
import { useState } from "react";

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const BANNER_TYPES = [
  { value: 0, label: "Banner chính" },
  { value: 1, label: "Banner phụ" },
];

export default function CreateSpaPage() {
  const [previewImage, setPreviewImage] = useState("");

  const { register, control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      logo_url: "",
      banners: [
        {
          image_url: "",
          title: "",
          subtitle: "",
          order: 0,
          is_active: true,
          type: 0,
        },
      ],
      workingHours: [
        {
          day: "Monday",
          open_time: "09:00",
          close_time: "18:00",
        },
      ],
    },
  });

  const {
    fields: bannerFields,
    append: appendBanner,
    remove: removeBanner,
  } = useFieldArray({
    control,
    name: "banners",
  });

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        // Generate unique filename
        const filename = `${Date.now()}-${file.name}`;
        const filepath = `/imgs/${filename}`;

        // For preview
        const previewUrl = URL.createObjectURL(file);
        setPreviewImage(previewUrl);
        console.log("filepath", filepath);
        // Update form data with file path using setValue
        setValue("logo_url", filepath);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const onSubmit = async (data: any) => {
    console.log("Form Data:", {
      name: data.name,
      address: data.address,
      phone: data.phone,
      email: data.email,
      logo_url: data.logo_url,
      banners: data.banners,
      workingHours: data.workingHours,
      seo_title: data.seo_title,
      seo_description: data.seo_description,
      facebook_url: data.facebook_url,
      instagram_url: data.instagram_url,
    });
  };

  return (
    <List
      headerButtons={[
        <Button
          key="save"
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
        >
          Save
        </Button>,
      ]}
    >
      <form>
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
                        onChange={handleImageUpload}
                      />
                    </Button>
                    {previewImage && (
                      <Box
                        component="img"
                        src={previewImage}
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
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register("phone")}
                    fullWidth
                    label="Số điện thoại"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register("email")}
                    fullWidth
                    label="Email"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                SEO & Social Media
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    {...register("seo_title")}
                    fullWidth
                    label="SEO Title"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("seo_description")}
                    fullWidth
                    label="SEO Description"
                    multiline
                    rows={2}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register("facebook_url")}
                    fullWidth
                    label="Facebook URL"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register("instagram_url")}
                    fullWidth
                    label="Instagram URL"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6">Banners</Typography>
                <Button
                  startIcon={<Add />}
                  onClick={() =>
                    appendBanner({
                      image_url: "",
                      title: "",
                      subtitle: "",
                      order: bannerFields.length,
                      is_active: true,
                      type: 0,
                    })
                  }
                  size="small"
                >
                  Thêm Banner
                </Button>
              </Box>

              {bannerFields.map((field, index) => (
                <Box
                  key={field.id}
                  sx={{
                    mb: 2,
                    p: 2,
                    border: "1px solid #eee",
                    borderRadius: 1,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
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
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const previewUrl = URL.createObjectURL(file);
                                register(`banners.${index}.image_url`).onChange(
                                  {
                                    target: { value: previewUrl },
                                  },
                                );
                              }
                            }}
                          />
                        </Button>
                        {watch(`banners.${index}.image_url`) && (
                          <Box
                            component="img"
                            src={watch(`banners.${index}.image_url`)}
                            alt="Preview"
                            sx={{
                              width: 100,
                              height: 60,
                              objectFit: "cover",
                              borderRadius: 1,
                            }}
                          />
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register(`banners.${index}.title`)}
                        fullWidth
                        label="Tiêu đề"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register(`banners.${index}.subtitle`)}
                        fullWidth
                        label="Phụ đề"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        {...register(`banners.${index}.order`)}
                        fullWidth
                        label="Thứ tự"
                        type="number"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        {...register(`banners.${index}.type`)}
                        select
                        fullWidth
                        label="Loại"
                        size="small"
                      >
                        {BANNER_TYPES.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={2}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...register(`banners.${index}.is_active`)}
                            defaultChecked
                          />
                        }
                        label="Kích hoạt"
                      />
                      <IconButton
                        color="error"
                        onClick={() => removeBanner(index)}
                        size="small"
                      >
                        <Delete />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Giờ làm việc
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
                  <TextField
                    {...register(`workingHours.0.day`)}
                    defaultValue="Monday"
                    size="small"
                    sx={{ width: 120 }}
                  />
                  <TextField
                    {...register(`workingHours.0.open_time`)}
                    label="Giờ mở cửa"
                    type="time"
                    size="small"
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    {...register(`workingHours.0.close_time`)}
                    label="Giờ đóng cửa"
                    type="time"
                    size="small"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
    </List>
  );
}
