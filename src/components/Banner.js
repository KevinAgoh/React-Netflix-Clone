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

  return (
    <header className='banner' 
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}), 
                                linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`
            }}
    >
      <div className="info-container">
        <h1 className="movie-title">{movie.title || movie.original_title}</h1>
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
