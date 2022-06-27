import Axios from "axios";
const url = "http://localhost:4000/api/v1/event";
export const getMenuOverview = async () => {
  const response = await Axios.get(url);
  const axiosResponse = await response.data;
  return axiosResponse.data;
};
