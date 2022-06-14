import Axios from "axios";
const qs = require("qs");

export const getForm = async () => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const url = "http://localhost:4000/api/v1/auth/signUp";
  const resp = await Axios.post(url, config);

  return resp;
};
