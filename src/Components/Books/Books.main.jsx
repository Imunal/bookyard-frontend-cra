import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Card from 'Components/Card/Card';
import Button from 'Components/Button/Button';

import { getFavouriteBooks, isBookInFavourites } from 'Utils/book';

const Books = ({ books, category, fetchBooks, fetchPageBooks }) => {
  const [favourites, setFavourites] = useState([]);
  const handlePageChange = (pageParams) => {
    fetchPageBooks(pageParams, category);
  };
  const setFavouritesState = () => {
    const localStorageData = getFavouriteBooks();
    if (localStorageData) {
      setFavourites(JSON.parse(localStorageData));
    }
  };
  useEffect(() => {
    setFavouritesState();
    fetchBooks('/book');
  }, []);

  const renderBooks = () =>
    books.data.map((book) => (
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
    <div>
      <div className="row">{books ? renderBooks() : ''}</div>
      <div className="paginate">
        <div className="row mt-5">
          <div className="col-md-6">
            <Button
              onClick={() => handlePageChange(books.meta.previous_page_url)}
              disabled={books && books.meta.previous_page_url ? false : true}
            >
              Poprzednia strona
            </Button>
          </div>
          <div className="col-md-6 float-right">
            <Button
              onClick={() => handlePageChange(books.meta.next_page_url)}
              disabled={books && books.meta.next_page_url ? false : true}
            >
              Następna strona
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;

Books.propTypes = {
  books: PropTypes.object,
  category: PropTypes.number,
  fetchBooks: PropTypes.func,
  fetchPageBooks: PropTypes.func,
};
