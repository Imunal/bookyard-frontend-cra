import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryID, categoryName, selectedCategory, onSelect }) => {
  return (
    <div
      className={`category mb-1${selectedCategory === categoryID ? ` category_active` : ``}`}
      onClick={() => onSelect(categoryID)}
      key={categoryID}
    >
      <span>{categoryName}</span>
    </div>
  );
};

export default Category;

Category.propTypes = {
  categoryID: PropTypes.number,
  categoryName: PropTypes.string,
  selectedCategory: PropTypes.number,
  onSelect: PropTypes.func,
};
