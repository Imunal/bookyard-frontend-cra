import { connect } from 'react-redux';
import { fetchPageBooks } from 'Store/Actions/bookAction';
import { fetchCategories, setCategory } from 'Store/Actions/categoryAction';
import Categories from './Categories.main';

import { getCategories, getCategory } from 'Store/Selectors/categorySelector';

const mapDispatchToProps = {
  fetchCategories: () => fetchCategories(),
  fetchPageBooks: (page, categoryID) => fetchPageBooks(page, categoryID),
  setCategory: (categoryID) => setCategory(categoryID),
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  selectedCategory: getCategory(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
