import axiosApiCaller from "../AxiosInstance";

export async function GetTutoriallsApi() {
  try {
    const response = await axiosApiCaller.get("/tutorials/all");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
