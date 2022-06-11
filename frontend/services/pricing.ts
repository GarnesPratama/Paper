import Axios from "axios";
export const getMenuPrice = async () => {
  const ROOT_API = process.env.NEXT_LOCAL_API;
  const response = await Axios.get("http://localhost:4000/api/v1/payment");
  const axiosResponse = response.data;
  return axiosResponse.data;
};

export const getMenuCheckout = async (id) => {
  const ROOT_API = process.env.NEXT_LOCAL_API;
  const response = await Axios.get(
    `http://localhost:4000/api/v1/checkout/${id}`
  );
  const axiosResponse = response.data;
  return axiosResponse;
};
