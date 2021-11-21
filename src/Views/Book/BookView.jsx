import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import axios from 'Configs/axios';

import Layout from 'Components/Layout/Layout';
import Card from 'Components/Card/Card';

import { getFavouriteBooks, isBookInFavourites } from 'Utils/book';
import Button from 'Components/Button/Button';

const BookView = () => {
  const { bookID } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const fetchBook = () => {
    axios
      .get(`/book/${bookID}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setFavouritesState = () => {
    const localStorageData = getFavouriteBooks();
    if (localStorageData) {
      setFavourites(JSON.parse(localStorageData));
    }
  };

  useEffect(() => {
    setFavouritesState();
    fetchBook();
  }, []);

  const renderBookInformation = () => (
    <Card
      bookID={book.book_id}
      bookName={book.book_name}
      bookType={book.book_genre}
      isFollowed={isBookInFavourites(favourites, book.book_id)}
      onFollow={() => setFavouritesState()}
    />
  );

  return (
    <Layout>
      <div>
        <Button onClick={() => navigate(-1)}>Wstecz</Button>
      </div>
      <div className="mt-5">{book ? renderBookInformation() : ''}</div>
    </Layout>
  );
};

export default BookView;
