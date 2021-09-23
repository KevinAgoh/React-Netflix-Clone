import React, { useEffect } from 'react';
import "./row.scss";

function Row({ title, fetchUrl }) {

  const axios = require("axios").create({
    baseURL: "https://api.themoviedb.org/3"
  });

  const [ movies, setMovies ] = React.useState([]);
  const baseUrl = "https://api.themoviedb.org/3";

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="cards">
        {movies.map((movie)=> (
          <div className="card">
            <img src={`${baseUrl}${movie.data.results.poster_path}`} alt={`${baseUrl}${movie.data.results.name}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row;
