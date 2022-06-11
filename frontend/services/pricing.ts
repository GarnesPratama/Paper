import Axios from "axios";
export const getMenuPrice = async () => {
  const ROOT_API = process.env.NEXT_LOCAL_API;
  const response = await Axios.get("http://localhost:4000/payment");
  const axiosResponse = response.data;
  return axiosResponse.data;
};
