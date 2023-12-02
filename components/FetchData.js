'use server'
export const  fetchData = async (path,params,revalidate) => {
  const response = await fetch(`https://api.themoviedb.org/3/${path}?api_key=${process.env.API_KEY}&${params}`,{next : {revalidate: revalidate ? revalidate : 3600}})
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}
