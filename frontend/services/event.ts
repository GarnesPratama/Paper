import Axios from "axios";

export const getMenuEvent = async (shortName) => {
  const response = await Axios.get(
    `http://localhost:4000/api/v1/event/${shortName}`
  );
  const axiosResponse = await response.data;
  return axiosResponse.data;
};
