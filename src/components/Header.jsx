import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import "./Header.css";
import Vector from "../img/Vector.png";
import { Link } from "react-router-dom";


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
            <li className='menu-item'>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/entertainment'>
                Entertainment
              </Link>
            </li>
            <li>
              <Link to='/fashion'>
                Fashion$Beauty
              </Link>
            </li>
            <li>
              <Link to='/business'>
                Business
              </Link>
            </li>
            <li>
              <Link to='/'>
                Others
              </Link>
            </li>
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
