'use client';
import { useState } from 'react';
import './header.css';

function Header() {
  const [searchText, setSearchText] = useState('');

  return (
    <header>
      <div className="navbar">
        <div className="searchbar">
          <span className="searchbarIcon">
            <i className="fas fa-search" />
          </span>

          <input
            type="search"
            className="searchInput"
            placeholder="search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
