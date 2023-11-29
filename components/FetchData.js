'use server'
export const  fetchData = async (path,params) => {
  const res = await fetch(`https://api.themoviedb.org/3/${path}?api_key=${process.env.API_KEY}&${params}`,{next : {revalidate: 10}})
  const data = await res.json();
  return data;
}
