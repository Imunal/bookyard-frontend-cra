import { connect } from 'react-redux';
import { fetchSearchBooks } from 'Store/Actions/bookAction';

import { getSearchBooks } from 'Store/Selectors/bookSelector';
import SearchView from './SearchView.main';

const mapDispatchToProps = {
  fetchSearchBooks: (page, bookName) => fetchSearchBooks(page, bookName),
};

const mapStateToProps = (state) => ({
  searchedBooks: getSearchBooks(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
