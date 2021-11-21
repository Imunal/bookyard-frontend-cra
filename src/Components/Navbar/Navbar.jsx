import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-wraper">
        <NavLink
          to="/favourites"
          className={({ isActive }) => 'nav-item' + (isActive ? ' nav-item-active' : '')}
        >
          <li>Obswerwowane</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => 'nav-item' + (isActive ? ' nav-item-active' : '')}
        >
          <li>Kontakt</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
