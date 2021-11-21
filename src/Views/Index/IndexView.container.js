import { connect } from 'react-redux';
import { fetchBooks } from 'Store/Actions/bookAction';
import IndexView from './IndexView.main';

const mapDispatchToProps = {
  fetchBooks: () => fetchBooks(),
};

export default connect(null, mapDispatchToProps)(IndexView);
