import React from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const bell = <FontAwesomeIcon icon={faBell} />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const handleSearchBarToggle = () => {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('hide-search-bar');
  }

  return (
    <div id='navbar'>
      <div className="navbar-left">
        <a href="#">
          <img src="../assets/fake_logo_netflix.png" alt="Website logo" className='logo' />
        </a>
        <ul className='navbar-menu'>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#TV">TV Shows</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#new">New & Popular</a>
          </li>
          <li>
            <a href="#mist">My list</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" className="search-bar" />
        <span className="search-icon" onClick={handleSearchBarToggle}>
          {searchIcon}
        </span>
        <span className="bell">
          {bell}
        </span>
        <img src="" alt="" />
        <div className="dropdown-menu">
          <a href="#">Account</a>
          <a href="#">Help Centre</a>
          <a href="#">Sign Out</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
