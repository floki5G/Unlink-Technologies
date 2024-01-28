import { IDescription, ISyllabus } from "../../types";
import axiosApiCaller from "../AxiosInstance";

export async function GetTutoriallsApi() {
  try {
    const response = await axiosApiCaller.get("/tutorials/all");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export interface ITutorials {
  name: string;
  is_active: boolean;
  is_disabled: boolean;
}
export async function PostCreateTutorialApi(payload: ITutorials) {
  try {
    const response = await axiosApiCaller.post(`/tutorials/upsert`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export interface ICategory {
  id?: number;
  name: string;
  is_active: boolean;
  is_disabled: boolean;
}
export async function PostCreateCategoryApi(payload: ICategory) {
  try {
    const response = await axiosApiCaller.post(`/categories/upsert`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function GetSyllabusTutorialListApi(id: string) {
  try {
    const response = await axiosApiCaller.get(`/info/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function PostDescriptionUpsertApi(payload: IDescription) {
  try {
    const response = await axiosApiCaller.post(`/description/upsert`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export interface ISyllabusPayload {
  id?: number;
  name: string;
  description: string;
  is_primary: boolean;
  slug?: string;
  is_active: boolean;
  is_disabled: boolean;
}

export async function PostSyllabusUpsertApi(payload: ISyllabusPayload) {
  try {
    const response = await axiosApiCaller.post(`/syllabus/upsert`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function GetAllSyllabusApi() {
  try {
    const response = await axiosApiCaller.get(`/syllabus/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function SyncDataApi() {
  try {
    const response = await axiosApiCaller.get(`/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export interface ITutorialsCategory {
  id?: number;
  display_order: number;
  category_id: number;
  tutorial_id: number;
  is_active: boolean;
  is_disabled: boolean;
}

export async function postTutorialCategoryApi(payload: ITutorialsCategory) {
  try {
    const response = await axiosApiCaller.post(
      `/categories_tutorial/upsert`,
      payload,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
