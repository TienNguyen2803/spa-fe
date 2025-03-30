import { UseFormReturn } from "react-hook-form";

export interface ISpaForm {
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
  banners: IBanner[];
  workingHours: IWorkingHour[];
}

export interface IBanner {
  image_url: string;
  preview_url: string;
  title: string;
  subtitle: string;
  order: number;
  is_active: boolean;
  type: number;
  filename?: string;
}

export interface IWorkingHour {
  day_of_week: string;
  opening_time: string;
  closing_time: string;
  is_closed: boolean;
}

export interface ISpaFormProps {
  form: UseFormReturn<ISpaForm>;
  onSubmit: (data: ISpaForm) => void;
  showLogoError: boolean;
  setShowLogoError: (show: boolean) => void;
  showBannerErrors: boolean[];
  setShowBannerErrors: (errors: boolean[]) => void;
}
