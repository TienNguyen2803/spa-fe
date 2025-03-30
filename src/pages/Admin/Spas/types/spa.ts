
export interface ISpa {
  id: number;
  name: string;
  logo_url: string;
  address: string;
  phone: string;
  email: string;
  seo_title: string;
  seo_description: string;
  facebook_url: string;
  instagram_url: string;
  workingHours: {
    day_of_week: string;
    opening_time: string;
    closing_time: string;
    is_closed: boolean;
  }[];
  banners: {
    image_url: string;
    preview_url: string;
    title: string;
    subtitle: string;
    order: number;
    is_active: boolean;
    type: number;
  }[];
}
