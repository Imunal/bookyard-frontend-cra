import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.object,
};
