
import { Create } from "@refinedev/mui";
import { Box, TextField, Grid, Button } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { IResourceComponentsProps } from "@refinedev/core";

export default function CreateSpaPage() {
  const {
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              {...register("name", { required: "Tên spa là bắt buộc" })}
              error={!!errors.name}
              helperText={errors.name?.message as string}
              fullWidth
              label="Tên Spa"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("logo_url")}
              fullWidth
              label="URL Logo"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("address", { required: "Địa chỉ là bắt buộc" })}
              error={!!errors.address}
              helperText={errors.address?.message as string}
              fullWidth
              label="Địa chỉ"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("phone", { required: "Số điện thoại là bắt buộc" })}
              error={!!errors.phone}
              helperText={errors.phone?.message as string}
              fullWidth
              label="Số điện thoại"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("email", {
                required: "Email là bắt buộc",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email không hợp lệ",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message as string}
              fullWidth
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("description")}
              fullWidth
              multiline
              rows={4}
              label="Mô tả"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("seo_title")}
              fullWidth
              label="Tiêu đề SEO"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("seo_description")}
              fullWidth
              label="Mô tả SEO"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("facebook_url")}
              fullWidth
              label="URL Facebook"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("instagram_url")}
              fullWidth
              label="URL Instagram"
            />
          </Grid>
        </Grid>
      </Box>
    </Create>
  );
}
