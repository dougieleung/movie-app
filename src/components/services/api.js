import { APP_KEY, BASE_URL } from '../config/api_config.js';

// Movies endpoints

//Now Playing, Popular, Top Rated, Upcoming

export const getMovies = async (choice) => {

    try {
    const url = `${BASE_URL}/movie/${choice}?api_key=${APP_KEY}&language=en-US&page=1`;
 
    const api_call = await fetch(url);

    const response = await api_call.json();

    const movies = response.results;

    return movies;

    } catch (error) {
      throw error;
    }
}

//Search endpoints

//Multi Search, Search Movies, Search TV Shows

export const getSearch = async (string, query) => {

    try {
        
    const encoded = encodeURI(string);

    const url = `${BASE_URL}/search/${query}?api_key=${APP_KEY}&language=en-US&query=${encoded}&page=1&include_adult=false`;

    const api_call = await fetch(url);

    const response = await api_call.json();
   
    const searchResults = response.results;

    return searchResults;

    } catch (error) {
      throw error;
    }
}

//Television endpoints

//Airing today, on the air, popular, top rated

export const getTelevision = async choice => {

    try {
    const url = `${BASE_URL}/tv/${choice}?api_key=${APP_KEY}&language=en-US&page=1`;
 
    const api_call = await fetch(url);

    const response = await api_call.json();

    const tvShows = response.results;

    return tvShows;

    } catch (error) {
      throw error;
    }
}

//Get Details

export const getDetails = async (type, id) => {

    try {
    const url = `${BASE_URL}/${type}/${id}?api_key=${APP_KEY}&language=en-US`;

    const api_call = await fetch(url);

    const response = await api_call.json();

    const showDetails = response;

    console.log(showDetails);

    return showDetails;

    } catch (error) {
      throw error;
    }
}