import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./row.scss";

function Row({ title, fetchUrl, isLargeRow }) {

  // Fetch API 

  const axios = require("axios").create({
    baseURL: "https://api.themoviedb.org/3"
  });
  const [ movies, setMovies ] = React.useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";


  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  // react-youtube

  const [trailerUrl, setTrailerUrl] = React.useState('');

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay:1,
    }
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="cards">
        {movies.map((movie)=> (
          <>
            <div className="card">
              <img
                className="card-image"
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={`${baseUrl}${movie.name}`}
                key={movie.id}
                onClick={handleClick(movie)}
              />
              <h3 className="movie-title">{movie.name || movie.title || movie.original_title || movie.original_name}</h3>
            </div>
          </>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;
