import React, { useEffect } from 'react';
import axios from "axios";

import './banner.scss';

function Banner() {

  const API_KEY = "3d27593948a5340e1af6efc162165567";
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const axios = require('axios');


  const [movie, setMovie] = React.useState([]);

  useEffect(() => {
    axios.get(url)
    .then(function (response) {
      setMovie(response.data.results[0]);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }, [])

  return (
    <header className='banner' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
      <h1 className="movie-title">{movie.name || movie.original_name}</h1>
      <h3 className="movie-description">{movie.overview}</h3>
      <div className="button-container">
        <button></button>
        <button></button>
      </div>
    </header>
  )
}

export default Banner
