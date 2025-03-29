
import React, { useState } from "react";
import { List } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
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

  const { queryResult } = useOne({
    resource: "spa-info",
    id: id || "",
  });

  const { data } = queryResult;

  const {
    refineCore: { onFinish },
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<ISpaForm>({
    refineCoreProps: {
      resource: "spa-info",
      id: id,
      action: "edit",
      redirect: false,
    },
    values: {
      name: data?.data.name || "",
      address: data?.data.address || "",
      phone: data?.data.phone || "",
      email: data?.data.email || "",
      logo_url: data?.data.logo_url || "",
      logo_filename: data?.data.logo_filename || "",
      seo_title: data?.data.seo_title || "",
      seo_description: data?.data.seo_description || "",
      facebook_url: data?.data.facebook_url || "",
      instagram_url: data?.data.instagram_url || "",
      banners: data?.data.banners || [],
      workingHours: data?.data.workingHours || [],
    },
  });

  const { mutate } = useUpdate();

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

    if (hasError) {
      window.alert("Vui lòng upload logo và banner");
      return;
    }

    await onFinish(data);
    push("/spas");
  };

  return (
    <List>
      <SpaForm
        form={{ register, handleSubmit, setValue, control, formState: { errors }, watch }}
        onSubmit={onSubmit}
        showLogoError={showLogoError}
        setShowLogoError={setShowLogoError}
        showBannerErrors={showBannerErrors}
        setShowBannerErrors={setShowBannerErrors}
      />
    </List>
  );
}
