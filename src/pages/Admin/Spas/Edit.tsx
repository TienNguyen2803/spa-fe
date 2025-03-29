
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Box, Grid, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

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

export default function EditSpaPage() {
  const { id } = useParams();

  const {
    refineCore: { onFinish, formLoading, queryResult },
    register,
    handleSubmit,
    formState: { errors },
    control,
    saveButtonProps,
  } = useForm<ISpaForm>({
    refineCoreProps: {
      resource: "spa-info",
      id: id,
      action: "edit",
      redirect: false,
    },
  });

  const spaData = queryResult?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Box
        component="form"
        sx={{ pt: 2 }}
        autoComplete="off"
        onSubmit={handleSubmit(onFinish)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("name", {
                required: "Tên spa là bắt buộc",
              })}
              label="Tên Spa"
              defaultValue={spaData?.name}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
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
              label="Email"
              defaultValue={spaData?.email}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("address", {
                required: "Địa chỉ là bắt buộc",
              })}
              label="Địa chỉ"
              defaultValue={spaData?.address}
              error={!!errors.address}
              helperText={errors.address?.message}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("phone", {
                required: "Số điện thoại là bắt buộc",
              })}
              label="Số điện thoại"
              defaultValue={spaData?.phone}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("facebook_url")}
              label="Facebook URL"
              defaultValue={spaData?.facebook_url}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("instagram_url")}
              label="Instagram URL"
              defaultValue={spaData?.instagram_url}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("seo_title")}
              label="SEO Title"
              defaultValue={spaData?.seo_title}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("seo_description")}
              label="SEO Description"
              defaultValue={spaData?.seo_description}
              multiline
              rows={3}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </Edit>
  );
}
