import React from 'react';
import "./row.scss";
import axios from 'axios';

const API_KEY = "3d27593948a5340e1af6efc162165567";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchMovieThrillers: `/discover/movies?api_key=${API_KEY}&with_genres=53`,
  fetchTvComedies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchDocumentaryFilms: `/discover/movies?api_key=${API_KEY}&with_genres=99`,
  fetchTvDrama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
}


function Row(props) {
  return (
    <div>
      
    </div>
  )
}

export default Row;
