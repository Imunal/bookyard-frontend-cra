import { connect } from 'react-redux';
import { fetchBooks, fetchPageBooks } from 'Store/Actions/bookAction';

import { getBooks } from 'Store/Selectors/bookSelector';
import { getCategory } from 'Store/Selectors/categorySelector';
import Books from './Books.main';

const mapDispatchToProps = {
  fetchBooks: () => fetchBooks(),
  fetchPageBooks: (page, categoryID) => fetchPageBooks(page, categoryID),
};

const mapStateToProps = (state) => ({
  books: getBooks(state),
  category: getCategory(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
