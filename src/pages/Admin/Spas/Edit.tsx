import React, { useState } from "react";
import { List } from "@refinedev/mui";
import { useForm } from "react-hook-form";
import { useUpdate, useNavigation, useOne } from "@refinedev/core";
import SpaForm from "./components/SpaForm";
import { useParams } from "react-router";

type Params = {
  id: string;
};

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
  const { id } = useParams<Params>();

  const form = useForm<ISpaForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const { data, isLoading } = useOne({
    resource: "spa-info",
    id: id || "",
    queryOptions: {
      enabled: !!id,
    },
  });

  React.useEffect(() => {
    if (data?.data) {
      const banners = data.data.banners?.map(banner => ({
        ...banner,
        filename: banner.image_url?.split('/').pop() || ''
      })) || [];

      form.reset({
        name: data.data.name,
        address: data.data.address,
        phone: data.data.phone,
        email: data.data.email,
        logo_url: data.data.logo_url,
        logo_filename: data.data.logo_url?.split('/').pop() || "",
        seo_title: data.data.seo_title,
        seo_description: data.data.seo_description,
        facebook_url: data.data.facebook_url,
        instagram_url: data.data.instagram_url,
        banners: banners,
        workingHours: [{
          day_of_week: data.data.workingHours?.[0]?.day_of_week || "Monday",
          opening_time: data.data.workingHours?.[0]?.opening_time || "09:00",
          closing_time: data.data.workingHours?.[0]?.closing_time || "17:00",
          is_closed: data.data.workingHours?.[0]?.is_closed || false
        }]
      });
      setShowBannerErrors(
        new Array(banners.length || 1).fill(false),
      );
    }
  }, [data, form]);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

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