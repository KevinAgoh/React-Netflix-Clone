import React from 'react';
import './App.scss';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row 
        title="Trending Now"
      />
      <Row 
        title="Netflix Originals"
      />
      <Row 
        title="Top Rated"
      />
      <Row 
        title="Thrillers"
      />
      <Row 
        title="TV Comedies"
      />
      <Row 
        title="Documentary Films"
      />
      <Row 
        title="Comedies"
      />
      <Row 
        title="Action & Adventure"
      />
    </div>
  );
}

export default App;
