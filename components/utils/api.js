import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.TMDB_API_TOKEN;
const headers = {
  Authorization: `bearer ${TMDB_TOKEN}`,
};
console.log(headers);
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
