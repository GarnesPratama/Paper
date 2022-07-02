import Axios from "axios";
const url = `http://localhost:4000/api/v1/overview`;
export const getMenuOverview = async (email) => {
  const response = await Axios.get(
    `http://localhost:4000/api/v1/dashboard/${email}`
  );
  const axiosResponse = await response.data;
  return axiosResponse.data;
};
