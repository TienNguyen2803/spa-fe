import React, { useState } from "react";
import { List } from "@refinedev/mui";
import { useForm } from "react-hook-form";
import { useUpdate, useNavigation, useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";
import SpaForm from "./components/SpaForm";

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
  const [showLogoError, setShowLogoError] = useState(false);
  const [showBannerErrors, setShowBannerErrors] = useState<boolean[]>([false]);
  const { push } = useNavigation();
  const { id } = useParams();

  const form = useForm<ISpaForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const { data } = useOne({
    resource: "spa-info",
    id: id as string,
  });

  console.log(data, id);

  const { mutate } = useUpdate({
    resource: "spa-info",
    successNotification: {
      message: "Cập nhật Spa thành công",
      type: "success",
    },
    errorNotification: {
      message: "Có lỗi xảy ra khi cập nhật Spa",
      type: "error",
    },
  });

  React.useEffect(() => {
    if (data?.data) {
      form.reset(data.data);
      setShowBannerErrors(
        new Array(data.data.banners?.length || 1).fill(false),
      );
    }
  }, [data]);

  const onSubmit = async (data: ISpaForm) => {
    let hasError = false;

    if (!data.logo_url) {
      setShowLogoError(true);
      hasError = true;
    }

    const newBannerErrors = data.banners.map((banner) => !banner.image_url);
    setShowBannerErrors(newBannerErrors);
    if (newBannerErrors.some((error) => error)) {
      hasError = true;
    }

    await form.trigger();
    if (hasError) {
      window.alert("Vui lòng upload logo và banner");
      return;
    }

    mutate(
      {
        resource: "spa-info",
        id: id as string,
        values: data,
      },
      {
        onSuccess: () => {
          push("/spas");
        },
      },
    );
  };

  return (
    <List>
      <SpaForm
        form={form}
        onSubmit={onSubmit}
        showLogoError={showLogoError}
        setShowLogoError={setShowLogoError}
        showBannerErrors={showBannerErrors}
        setShowBannerErrors={setShowBannerErrors}
      />
    </List>
  );
}
