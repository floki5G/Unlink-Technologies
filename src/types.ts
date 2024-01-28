export interface ITutorials {
  id: number;
  name: string;
  is_active: boolean;
  is_disabled: boolean;
  slug: string;
  image_uri: string;
  categories: number[];
}

export interface ICategory {
  id: number;
  name: string;
  tutorial_id: number;
  description: string;
}

export interface IDescription {
  id?: number;
  name: string;
  description: string;
  is_active: boolean;
  is_disabled: boolean;
}
export interface ISyllabus {
  id?: number;
  name: string;
  description: string;
  is_primary: boolean;
  is_active: boolean;
  is_disabled: boolean;
}
