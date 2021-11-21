import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Search from '../Search/Search';

//Assets
import Logo from 'Assets/Image/logo-bookyard.svg';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <>
      <div>
        <Link to="/">
          <img src={Logo} alt="Bookyard" />
        </Link>
      </div>
      <div className="search">
        <Search />
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
