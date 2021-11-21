const LOCAL_STORAGE_NAME = 'favourites';

const getFavouriteBooks = () => {
  return localStorage.getItem(LOCAL_STORAGE_NAME);
};

const isBookInFavourites = (data, bookID) => {
  if (!data) return false;
  const isFavourite = data.find((isFollowed) => isFollowed.bookID === bookID);
  return isFavourite ? true : false;
};

const addBookToFavourites = (bookID, bookName, bookType, bookCategory) => {
  let localStorageData = JSON.parse(getFavouriteBooks());

  // Find if book is already in favourite.
  const isAlreadyInFavourites = isBookInFavourites(localStorageData, bookID);
  if (isAlreadyInFavourites) {
    // Find book in local storage.
    const removeIndex = localStorageData.findIndex((book) => book.bookID === bookID);
    // Remove object in local storage
    localStorageData.splice(removeIndex, 1);
    //Set updated local storage.
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(localStorageData));
    return;
  }

  // Check if it's a first object
  if (!localStorageData) {
    // If is a first object make an array.
    const object = [
      {
        bookID: bookID,
        bookName: bookName,
        bookType: bookType,
        bookCategory: bookCategory,
      },
    ];
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(object));
    return;
  }

  // Add another book to favourite list.
  const object = {
    bookID: bookID,
    bookName: bookName,
    bookType: bookType,
    bookCategory: bookCategory,
  };

  localStorageData = [...localStorageData, object];
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(localStorageData));
};

export { getFavouriteBooks, isBookInFavourites, addBookToFavourites };
