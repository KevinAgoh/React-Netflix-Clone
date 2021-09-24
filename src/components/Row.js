import React, { useEffect } from 'react';
import "./row.scss";

function Row({ title, fetchUrl }) {

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

  console.table(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="cards">
        {movies.map((movie)=> (
          <img src={`${baseUrl}${movie.backdrop_path}`} alt={`${baseUrl}${movie.name}`} />
        ))}
      </div>
    </div>
  )
}

export default Row;
