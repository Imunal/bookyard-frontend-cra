import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'Components/Layout/Layout';
import Categories from 'Components/Categories/Categories/Categories.container';
import Books from 'Components/Books/Books.container';

const IndexView = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <Categories />
        </div>
        <div className="col-md-9">
          <Books />
        </div>
      </div>
    </Layout>
  );
};

export default IndexView;

IndexView.propTypes = {
  fetchBooks: PropTypes.func,
};
