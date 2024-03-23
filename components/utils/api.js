import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const env = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
const headers = {
  Authorization: `bearer  ${env}`,
};
export const fetchDataFromAxios = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
