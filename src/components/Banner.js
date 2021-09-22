import React from 'react';
import axios from "axios";

function Banner() {

  const API_KEY = "3d27593948a5340e1af6efc162165567";
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const axios = require('axios');

  const [poster, setPoster] = React.useState('')

  axios.get(url)
  .then(function (response) {
    console.log(response);
    setPoster(response.data.results[0].poster_path);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  return (
    <div>
      <img src={poster} alt="" />
    </div>
  )
}

export default Banner
