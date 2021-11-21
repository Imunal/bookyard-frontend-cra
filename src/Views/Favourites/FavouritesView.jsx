import React, { useState, useEffect } from 'react';

import Layout from 'Components/Layout/Layout';
import Card from 'Components/Card/Card';

import { isBookInFavourites, getFavouriteBooks } from 'Utils/book';

const FavouritesView = () => {
  const [favourites, setFavourites] = useState([]);
  const setFavouritesState = () => {
    const localStorageData = getFavouriteBooks();
    if (localStorageData) {
      setFavourites(JSON.parse(localStorageData));
    }
  };
  useEffect(() => {
    setFavouritesState();
  }, []);

  const renderFavouritesBooks = () => {
    return (
      <div className="row mt-5">
        {favourites.map((favourite) => (
          <div className="col-md-4" key={favourite.bookID}>
            <Card
              bookID={favourite.bookID}
              bookName={favourite.bookName}
              bookType={favourite.bookGenre}
              bookCategory={favourite.bookCategory}
              isFollowed={isBookInFavourites(favourites, favourite.bookID)}
              onFollow={() => setFavouritesState()}
            />
          </div>
        ))}
      </div>
    );
  };
  return (
    <Layout>
      <div>
        <h1>Twoje ulubione:</h1>
        {favourites.length ? renderFavouritesBooks() : 'Nie posiadasz żadnych książek w ulubionych'}
      </div>
    </Layout>
  );
};

export default FavouritesView;
