
import { List } from "@refinedev/mui";
import { useCreate, useNavigation } from "@refinedev/core";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SpaForm from "./components/SpaForm";

import { ISpaForm } from "./types";

export default function CreateSpaPage() {
  const [showLogoError, setShowLogoError] = useState(false);
  const [showBannerErrors, setShowBannerErrors] = useState<boolean[]>([false]);
  const { push } = useNavigation();

  const form = useForm<ISpaForm>({
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
          day_of_week: "Monday",
          opening_time: "09:00",
          closing_time: "18:00",
          is_closed: false
        },
      ],
    },
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
      },
    );
  };

  return (
    <List breadcrumb={[{ label: "Spas" }, { label: "Create" }]}>
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
