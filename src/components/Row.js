import React, { useEffect } from 'react';
import "./row.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Row({ title, fetchUrl }) {

  const axios = require("axios").create({
    baseURL: "https://api.themoviedb.org/3"
  });

  const [ movies, setMovies ] = React.useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const arrowRight = <FontAwesomeIcon 
                      icon={faChevronRight} 
                      size="2x" 
                      className="chevron fa-beat" 
                      inverse
                      
                    />;

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
          <img
            className="card-image"
            src={`${baseUrl}${movie.backdrop_path}`} 
            alt={`${baseUrl}${movie.name}`}
            key={movie.id}
          />
        ))}
      </div>
      {arrowRight}      
    </div>
  )
}

export default Row;
