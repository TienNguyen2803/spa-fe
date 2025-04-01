
import React, { useState } from "react";
import { useUpdate, useNavigation, useOne } from "@refinedev/core";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import CategoryForm from "./components/CategoryForm";
import { IServiceCategoryForm } from "./types";
import { ListRefineCustom } from "../../../components/List/ListRefineCustom";
import { Typography } from "@mui/material";

type Params = {
  id: string;
};

export default function EditServiceCategoryPage() {
  const [showImageError, setShowImageError] = useState(false);
  const { push } = useNavigation();
  const { id } = useParams<Params>();

  const form = useForm<IServiceCategoryForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const { data, isLoading } = useOne({
    resource: "service-categories",
    id: id || "",
    queryOptions: {
      enabled: !!id,
    },
  });

  const { mutate } = useUpdate({
    resource: "service-categories",
    successNotification: {
      message: "Cập nhật danh mục thành công",
      type: "success",
    },
    errorNotification: {
      message: "Có lỗi xảy ra khi cập nhật danh mục",
      type: "error",
    },
  });

  React.useEffect(() => {
    if (data?.data) {
      form.reset({
        name: data.data.name,
        description: data.data.description,
        image_url: data.data.image_url,
        image_filename: data.data.image_url?.split("/").pop() || "",
        order: data.data.order,
        is_active: data.data.is_active,
      });
    }
  }, [data, form]);

  const onSubmit = async (data: IServiceCategoryForm) => {
    await form.trigger();
    
    mutate(
      {
        resource: "service-categories",
        id: id as string,
        values: data,
      },
      {
        onSuccess: () => {
          push("/service-categories");
        },
      },
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ListRefineCustom
      title={<Typography fontWeight={"bold"}>Chỉnh Sửa Danh Mục Dịch Vụ</Typography>}
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
