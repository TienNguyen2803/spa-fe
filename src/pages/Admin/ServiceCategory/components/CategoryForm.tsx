
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
    <Box 
      component="form" 
      onSubmit={handleSubmit(onSubmit)} 
      sx={{ 
        mt: 2,
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Tên danh mục"
            {...register("name", { required: "Vui lòng nhập tên danh mục" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              }
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Thứ tự hiển thị"
            {...register("order", { required: "Vui lòng nhập thứ tự" })}
            error={!!errors.order}
            helperText={errors.order?.message}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              }
            }}
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
            sx={{ 
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              }
            }}
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

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            sx={{ 
              px: 4,
              py: 1,
              borderRadius: 1,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              '&:hover': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
              }
            }}
          >
            Lưu
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
