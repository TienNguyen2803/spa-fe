
import React from "react";
import {
  Box,
  TextField,
  Grid,
  FormControlLabel,
  Switch,
  Button,
  Typography,
} from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { IServiceCategoryForm } from "../types";

interface CategoryFormProps {
  form: UseFormReturn<IServiceCategoryForm>;
  onSubmit: (data: IServiceCategoryForm) => void;
  showImageError: boolean;
  setShowImageError: (value: boolean) => void;
}

export default function CategoryForm({
  form,
  onSubmit,
  showImageError,
  setShowImageError,
}: CategoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Tên danh mục"
            {...register("name", { required: "Vui lòng nhập tên danh mục" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mô tả"
            multiline
            rows={4}
            {...register("description", { required: "Vui lòng nhập mô tả" })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            type="number"
            label="Thứ tự hiển thị"
            {...register("order", { required: "Vui lòng nhập thứ tự" })}
            error={!!errors.order}
            helperText={errors.order?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                {...register("is_active")}
                checked={watch("is_active")}
              />
            }
            label="Kích hoạt"
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Lưu
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
