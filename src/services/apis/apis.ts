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
  name: string,
  is_active: boolean,
  is_disabled: boolean
}
export async function CreateTutorialApi(payload: ITutorials) {
  try {
    const response = await axiosApiCaller.post(`/tutorials/upsert`, payload);
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