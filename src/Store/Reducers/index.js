import { combineReducers } from 'redux';

import bookReducer from './bookReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

export default rootReducer;
