
export interface IServiceCategory {
  id: number;
  name: string;
  image_url: string;
  description: string;
  order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface IServiceCategoryForm {
  name: string;
  image_url: string;
  image_filename?: string;
  description: string;
  order: number;
  is_active: boolean;
}
