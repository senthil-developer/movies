import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.TMDB_API_TOKEN;
const headers = {
  Authorization:
    "bearer " +
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTBlZjdiNWFkZGQ2OTc1NWZkYzNlZTdmYTdkNWY3OSIsInN1YiI6IjY1MGJkODlhNTFhNjRlMDExZWZjYTExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.thn-up213dT61dfA4GpMjvI16HRgQZ3_hmkyKJ5KtIs",
};
console.log(TMDB_TOKEN);
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
