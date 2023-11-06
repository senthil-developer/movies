// import {axios} from 'axios'
const BASE_URL = 'https://api.themoviedb.org/3'

//'/movie/popular?language=en&api_key=${API_KEY}&page=1&with_genres=28'

const API_KEY = process.env.API_KEY

export const fetchData = async (url,params) => { 
    const fetch = await fetch(`${BASE_URL}${url}?api_key=${API_KEY}&${params}`); 
        console.log(fetch)
        
        if(!fetch) {
        throw new Error('Failed to fetch data');
    }   
    return fetch;
}

