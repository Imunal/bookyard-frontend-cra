import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

import HeartOutLine from 'Assets/Icon/heart_outline.svg';
import Heart from 'Assets/Icon/heart.svg';

import { addBookToFavourites } from 'Utils/book';

const Card = ({ bookID, bookName, bookType, bookCategory, isFollowed, onFollow }) => {
  const handleFollowClick = () => {
    addBookToFavourites(bookID, bookName, bookType, bookCategory);
    onFollow();
  };
  return (
    <div className="card">
      <div className="card-placeholder">
        <h1 className="card-placeholder-letter">{bookName.slice(0, 1)}</h1>
      </div>
      <Link to={`/book/${bookID}`}>
        <h1>{bookName}</h1>
      </Link>
      <div className="mb-3">
        <span>{bookType}</span>
      </div>
      <div>
        <button
          type="button"
          className="button-primary d-flex align-items-center gap-3"
          onClick={handleFollowClick}
        >
          <ReactSVG src={isFollowed ? Heart : HeartOutLine} />
          <p className="p-0 m-0">{isFollowed ? 'Obserwujesz' : 'Obsweruj'}</p>
        </button>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  bookID: PropTypes.number,
  bookName: PropTypes.string,
  bookType: PropTypes.string,
  bookCategory: PropTypes.number,
  isFollowed: PropTypes.bool,
  onFollow: PropTypes.func,
};
