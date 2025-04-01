
import React, { useState } from "react";
import { useCreate, useNavigation } from "@refinedev/core";
import { useForm } from "react-hook-form";
import CategoryForm from "./components/CategoryForm";
import { IServiceCategoryForm } from "./types";
import { ListRefineCustom } from "../../../components/List/ListRefineCustom";
import { Typography } from "@mui/material";

export default function CreateServiceCategoryPage() {
  const [showImageError, setShowImageError] = useState(false);
  const { push } = useNavigation();

  const form = useForm<IServiceCategoryForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      image_url: "",
      order: 0,
      is_active: true,
    },
  });

  const { mutate } = useCreate({
    resource: "service-categories",
    successNotification: {
      message: "Tạo mới danh mục thành công",
      type: "success",
    },
    errorNotification: {
      message: "Có lỗi xảy ra khi tạo danh mục",
      type: "error",
    },
  });

  const onSubmit = async (data: IServiceCategoryForm) => {
    await form.trigger();
    
    mutate(
      {
        resource: "service-categories",
        values: data,
      },
      {
        onSuccess: () => {
          push("/service-categories");
        },
      },
    );
  };

  return (
    <ListRefineCustom
      title={<Typography fontWeight={"bold"}>Tạo Danh Mục Dịch Vụ</Typography>}
    >
      <CategoryForm
        form={form}
        onSubmit={onSubmit}
        showImageError={showImageError}
        setShowImageError={setShowImageError}
      />
    </ListRefineCustom>
  );
}
