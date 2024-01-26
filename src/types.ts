export interface ITutorialls {
  id: number;
  name: string;
  is_active: boolean;
  is_disabled: boolean;
  slug: string;
  image_uri: string;
}


export interface IDescription {
  id: number;
  description: string;
  tutorial_id: number;
name: string;
}
export interface ISyllabus {
  id: number;
  name: string;
  tutorial_id: number;
  description: number[];
}