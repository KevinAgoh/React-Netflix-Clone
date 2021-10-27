import React, { useEffect } from 'react';
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
              />
              <h3 className="movie-title">{movie.name || movie.title || movie.original_title || movie.original_name}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
