import { Add, CloudUpload, Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { List } from "@refinedev/mui";
import { useCreate, useNavigation } from "@refinedev/core";
import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";

interface ISpaForm {
  name: string;
  address: string;
  phone: string;
  email: string;
  logo_url: string;
  logo_filename: string;
  seo_title: string;
  seo_description: string;
  facebook_url: string;
  instagram_url: string;
  banners: {
    image_url: string;
    preview_url: string;
    title: string;
    subtitle: string;
    order: number;
    is_active: boolean;
    type: number;
    filename?: string;
  }[];
  workingHours: {
    day: string;
    open_time: string;
    close_time: string;
  }[];
}

const BANNER_TYPES = [
  { value: 0, label: "Banner chính" },
  { value: 1, label: "Banner phụ" },
];

export default function CreateSpaPage() {
  const { push } = useNavigation();
  const [showLogoError, setShowLogoError] = useState(false);
  const [showBannerErrors, setShowBannerErrors] = useState<boolean[]>([false]);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitted },
    trigger,
  } = useForm<ISpaForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      logo_url: "",
      logo_filename: "",
      banners: [
        {
          image_url: "",
          preview_url: "",
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

  const { mutate } = useCreate({
    resource: "spa-info",
    successNotification: {
      message: "Tạo mới Spa thành công",
      type: "success",
    },
    errorNotification: {
      message: "Có lỗi xảy ra khi tạo Spa",
      type: "error",
    },
  });

  const onSubmit = async (data: ISpaForm) => {
    let hasError = false;

    // Check logo_url
    if (!data.logo_url) {
      setShowLogoError(true);
      hasError = true;
    }

    // Check banners image_url
    const newBannerErrors = data.banners.map((banner) => !banner.image_url);
    setShowBannerErrors(newBannerErrors);
    if (newBannerErrors.some((error) => error)) {
      hasError = true;
    }

    await trigger();
    if (hasError) {
      window.alert("Vui lòng upload logo và banner");
      return;
    }

    mutate({
      resource: "spa-info", 
      values: {
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
      },
    },
    {
      onSuccess: () => {
        push("/spas");
      },
    });
  };

  return (
    <List>
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
                    {...register("name", { required: true })}
                    fullWidth
                    label="Tên Spa"
                    size="small"
                    error={!!errors.name && isSubmitted}
                    helperText={errors.name ? "Vui lòng nhập tên Spa" : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
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
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const filename = `${Date.now()}-${file.name}`;
                              const filepath = `/imgs/${filename}`;
                              setValue("logo_url", filepath);
                              setValue("logo_filename", file.name);
                              setShowLogoError(false);
                            }
                          }}
                        />
                      </Button>
                      {watch("logo_filename") && (
                        <Typography variant="body2">
                          {watch("logo_filename")}
                        </Typography>
                      )}
                    </Box>
                    {(showLogoError || isSubmitted) && !watch("logo_url") && (
                      <Typography color="error" variant="caption">
                        Vui lòng chọn logo
                      </Typography>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("address", { required: true })}
                    fullWidth
                    label="Địa chỉ"
                    size="small"
                    error={!!errors.address && isSubmitted}
                    helperText={errors.address ? "Vui lòng nhập địa chỉ" : ""}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register("phone", { required: true })}
                    fullWidth
                    label="Số điện thoại"
                    size="small"
                    error={!!errors.phone && isSubmitted}
                    helperText={
                      errors.phone ? "Vui lòng nhập số điện thoại" : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register("email", { required: true })}
                    fullWidth
                    label="Email"
                    size="small"
                    error={!!errors.email && isSubmitted}
                    helperText={errors.email ? "Vui lòng nhập email" : ""}
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
                    {...register("seo_title", { required: true })}
                    fullWidth
                    label="SEO Title"
                    size="small"
                    error={!!errors.seo_title && isSubmitted}
                    helperText={
                      errors.seo_title ? "Vui lòng nhập SEO Title" : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("seo_description", { required: true })}
                    fullWidth
                    label="SEO Description"
                    multiline
                    rows={2}
                    size="small"
                    error={!!errors.seo_description && isSubmitted}
                    helperText={
                      errors.seo_description
                        ? "Vui lòng nhập SEO Description"
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register("facebook_url", { required: true })}
                    fullWidth
                    label="Facebook URL"
                    size="small"
                    error={!!errors.facebook_url && isSubmitted}
                    helperText={
                      errors.facebook_url ? "Vui lòng nhập Facebook URL" : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...register("instagram_url", { required: true })}
                    fullWidth
                    label="Instagram URL"
                    size="small"
                    error={!!errors.instagram_url && isSubmitted}
                    helperText={
                      errors.instagram_url ? "Vui lòng nhập Instagram URL" : ""
                    }
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
                  onClick={() => {
                    appendBanner({
                      image_url: "",
                      preview_url: "",
                      title: "",
                      subtitle: "",
                      order: bannerFields.length,
                      is_active: true,
                      type: 0,
                    });
                    setShowBannerErrors([...showBannerErrors, false]);
                  }}
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
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
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
                                  const filename = `${Date.now()}-${file.name}`;
                                  const filepath = `/imgs/${filename}`;
                                  setValue(
                                    `banners.${index}.image_url`,
                                    filepath,
                                    { shouldValidate: true },
                                  );
                                  setValue(
                                    `banners.${index}.filename`,
                                    file.name,
                                  );
                                  const newBannerErrors = [...showBannerErrors];
                                  newBannerErrors[index] = false;
                                  setShowBannerErrors(newBannerErrors);
                                }
                              }}
                            />
                          </Button>
                          {getValues(`banners.${index}.filename`) && (
                            <Typography variant="body2">
                              {getValues(`banners.${index}.filename`)}
                            </Typography>
                          )}
                        </Box>
                        {(showBannerErrors[index] || isSubmitted) &&
                          !watch(`banners.${index}.image_url`) && (
                            <Typography color="error" variant="caption">
                              Vui lòng chọn ảnh banner
                            </Typography>
                          )}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register(`banners.${index}.title`, {
                          required: true,
                        })}
                        fullWidth
                        label="Tiêu đề"
                        size="small"
                        error={!!errors.banners?.[index]?.title && isSubmitted}
                        helperText={
                          errors.banners?.[index]?.title
                            ? "Vui lòng nhập tiêu đề"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        {...register(`banners.${index}.subtitle`, {
                          required: true,
                        })}
                        fullWidth
                        label="Phụ đề"
                        size="small"
                        error={
                          !!errors.banners?.[index]?.subtitle && isSubmitted
                        }
                        helperText={
                          errors.banners?.[index]?.subtitle
                            ? "Vui lòng nhập phụ đề"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        {...register(`banners.${index}.order`)}
                        fullWidth
                        label="Thứ tự"
                        type="number"
                        size="small"
                        defaultValue={index}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        {...register(`banners.${index}.type`, {
                          required: true,
                        })}
                        select
                        fullWidth
                        label="Loại"
                        size="small"
                        defaultValue={0}
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
                        onClick={() => {
                          removeBanner(index);
                          const newBannerErrors = [...showBannerErrors];
                          newBannerErrors.splice(index, 1);
                          setShowBannerErrors(newBannerErrors);
                        }}
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
                    {...register(`workingHours.0.day`, { required: true })}
                    defaultValue="Monday"
                    label="Ngày trong tuần"
                    size="small"
                    sx={{ width: 180 }}
                    error={!!errors.workingHours?.[0]?.day && isSubmitted}
                    helperText={
                      errors.workingHours?.[0]?.day ? "Vui lòng chọn ngày" : ""
                    }
                  />
                  <TextField
                    {...register(`workingHours.0.open_time`, {
                      required: true,
                    })}
                    label="Giờ mở cửa"
                    type="time"
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.workingHours?.[0]?.open_time && isSubmitted}
                    helperText={
                      errors.workingHours?.[0]?.open_time
                        ? "Vui lòng nhập giờ mở cửa"
                        : ""
                    }
                  />
                  <TextField
                    {...register(`workingHours.0.close_time`, {
                      required: true,
                    })}
                    label="Giờ đóng cửa"
                    type="time"
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    error={
                      !!errors.workingHours?.[0]?.close_time && isSubmitted
                    }
                    helperText={
                      errors.workingHours?.[0]?.close_time
                        ? "Vui lòng nhập giờ đóng cửa"
                        : ""
                    }
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </Box>
      </form>
    </List>
  );
}