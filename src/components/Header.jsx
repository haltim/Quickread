import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import "./Header.css";
import Vector from "../img/Vector.png";


function Header() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <header>
      <div className='header'>
          <div className="header-title">
            <h1>Daily News</h1>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
            />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
        </div>
      </div>
      <div className="header-content">
        <div className="logo">
          <img src={Vector} alt="Logo" />
        </div>
        <nav>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='menu-item'><a href="#">Home</a></li>
            <li><a href="menu-item">Entertainment</a></li>
            <li><a href="menu-item">Sports</a></li>
            <li><a href="menu-item">Fashion&Beauty</a></li>
            <li><a href="menu-item">Games</a></li>
            <li><a href="menu-item">Business</a></li>
            <li><a href="menu-item">Others</a></li>
          </ul>

        </nav>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}
        </div>
      </div>
    </header>

  );
}

export default Header;
