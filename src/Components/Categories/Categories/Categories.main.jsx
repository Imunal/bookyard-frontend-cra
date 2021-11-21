import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Category from '../Category';

const Categories = ({
  categories,
  selectedCategory,
  fetchCategories,
  fetchPageBooks,
  setCategory,
}) => {
  useEffect(() => {
    fetchCategories();
  }, []);
  const handleCategorySelection = (categoryID) => {
    setCategory(categoryID);
    fetchPageBooks('/?page=1', categoryID);
  };
  const renderCategoryList = () =>
    categories.map((category) => (
      <li key={category.category_id}>
        <Category
          categoryID={category.category_id}
          categoryName={category.category_name}
          selectedCategory={selectedCategory}
          onSelect={(categoryID) => handleCategorySelection(categoryID)}
        />
      </li>
    ));
  return (
    <>
      <h1 className="category-title">Wszystkie kategorie:</h1>
      <ul>{categories.length ? renderCategoryList() : ''}</ul>
    </>
  );
};

export default Categories;

Categories.propTypes = {
  categories: PropTypes.array,
  selectedCategory: PropTypes.number,
  fetchCategories: PropTypes.func,
  fetchPageBooks: PropTypes.func,
  setCategory: PropTypes.func,
};
