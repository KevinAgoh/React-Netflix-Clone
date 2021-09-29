import React from 'react';
import './App.scss';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row 
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row 
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row 
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title="Thrillers"
        fetchUrl={requests.fetchMovieThrillers}
      />
      <Row 
        title="TV Comedies"
        fetchUrl={requests.fetchTvComedies}
      />
      <Row 
        title="Documentary Films"
        fetchUrl={requests.fetchDocumentaryFilms}
      />
      <Row 
        title="Comedies"
        fetchUrl={requests.fetchTvDrama}
      />
      <Row 
        title="Action & Adventure"
        fetchUrl={requests.fetchActionMovies}
      />
    </div>
  );
}

export default App;
