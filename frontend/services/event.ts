import Axios from "axios";

export const getMenuEvent = async (singkatan) => {
  const response = await Axios.get(
    `http://localhost:4000/api/v1/event/${singkatan}`
  );
  const axiosResponse = await response.data;
  return axiosResponse.data;
};
