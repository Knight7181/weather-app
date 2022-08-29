import axios from "axios";

export const getCitiesWeather = (cities, apiKey) => {
  const axiosConfig = {
    headers: {
      apiKey
    }
  }
  return axios.post("/api/v1/weathers", {cities}, axiosConfig).then(res => res.data);
};
