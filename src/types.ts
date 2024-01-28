export interface ITutorials {
  id: number;
  name: string;
  is_active: boolean;
  is_disabled: boolean;
  slug: string;
  image_uri: string;
  c_list: number[];
  s_list: number[];
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
  d_list: number[];
  is_primary: boolean;
  slug?: string;
  is_active: boolean;
  is_disabled: boolean;
}
