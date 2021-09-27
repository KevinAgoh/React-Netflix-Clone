import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './banner.scss';

function Banner() {

  const API_KEY = "3d27593948a5340e1af6efc162165567";
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const axios = require('axios');
  const playIcon = <FontAwesomeIcon icon={faPlay} />;
  const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />;


  const [movie, setMovie] = React.useState([]);

  useEffect(() => {
    axios.get(url)
    .then(function (res) {
      setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1 )]);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }, [])

  console.log(movie)

  return (
    <header className='banner' 
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
                                url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              backgroundPosition: "center center",
              backgroundColor: "white"
            }}
    >
      <div className="info-container">
        <h1 className="movie-title">{movie.name || movie.title || movie.original_title || movie.original_name}</h1>
        <h3 className="movie-description">{movie.overview}</h3>
        <div className="button-container">
          <button className="play-btn">{playIcon} Play</button>
          <button className="info-btn">{infoIcon} More Info</button>
        </div>
      </div>
    </header>
  )
}

export default Banner
