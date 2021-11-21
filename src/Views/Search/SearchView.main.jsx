import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import Layout from 'Components/Layout/Layout';
import Button from 'Components/Button/Button';
import Card from 'Components/Card/Card';

import { getFavouriteBooks, isBookInFavourites } from 'Utils/book';

const SearchView = ({ searchedBooks, fetchSearchBooks }) => {
  const { searchParams } = useParams();
  const [favourites, setFavourites] = useState([]);

  const setFavouritesState = () => {
    const localStorageData = getFavouriteBooks();
    if (localStorageData) {
      setFavourites(JSON.parse(localStorageData));
    }
  };

  useEffect(() => {
    setFavouritesState();
    fetchSearchBooks('/?page=1', searchParams);
  }, []);

  const handlePageChange = (pageParams) => {
    fetchSearchBooks(pageParams, searchParams);
  };

  const renderBooks = () =>
    searchedBooks.data.map((book) => (
      <div className="col-md-4" key={book.book_id}>
        <Card
          bookID={book.book_id}
          bookName={book.book_name}
          bookType={book.book_genre}
          bookCategory={book.book_category}
          isFollowed={isBookInFavourites(favourites, book.book_id)}
          onFollow={() => setFavouritesState()}
        />
      </div>
    ));

  return (
    <Layout>
      <h1>Wynik wyszukiwania &quot;{searchParams}&quot;</h1>
      <div className="row mt-3">{searchedBooks ? renderBooks() : ''}</div>
      <div className="paginate">
        <div className="row mt-5">
          <div className="col-md-6">
            <Button
              onClick={() => handlePageChange(searchedBooks.meta.previous_page_url)}
              disabled={searchedBooks && searchedBooks.meta.previous_page_url ? false : true}
            >
              Poprzednia strona
            </Button>
          </div>
          <div className="col-md-6 float-right">
            <Button
              onClick={() => handlePageChange(searchedBooks.meta.next_page_url)}
              disabled={searchedBooks && searchedBooks.meta.next_page_url ? false : true}
            >
              Następna strona
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchView;

SearchView.propTypes = {
  searchedBooks: PropTypes.object,
  fetchSearchBooks: PropTypes.func,
};
