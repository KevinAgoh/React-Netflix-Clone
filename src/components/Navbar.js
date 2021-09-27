import React from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react/cjs/react.development';

function Navbar() {

  const bell = <FontAwesomeIcon icon={faBell} />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const downArrow = <FontAwesomeIcon icon={faSortDown} />;

  const handleSearchBarToggle = () => {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('hide-search-bar');
  }

  const handleNavbarColour = () => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
          navbar.classList.add('black');
        } else {
          navbar.classList.remove('black');
        }
      });
    }
  }

  useEffect(() => {
    handleNavbarColour();
  }, [])

  window.addEventListener("scroll", function(e) {
    if (window.scrollY > 100) {
      handleNavbarColour();
    }
  })

  return (
    <div id='navbar' className={handleNavbarColour}>
      <div className="navbar-left">
        <a href="#">
          <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix logo" className='logo' />
        </a>
        <ul className='navbar-menu'>
          <li>
            <a href="#home" id="home">Home</a>
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
        <input type="text" className="search-bar" placeholder="Titles, people, genres"/>
        <span className="search-icon" onClick={handleSearchBarToggle}>
          {searchIcon}
        </span>
        <span className="bell">
          {bell}
        </span>
        <div className="dropdown-menu">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User avatar" className='avatar' /> 
          <span className="down-arrow">
            {downArrow}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
