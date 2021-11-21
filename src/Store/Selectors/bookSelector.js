import { createSelector } from 'reselect';

const getBookStore = (state) => state.rootReducer.book;

const getBooks = createSelector(getBookStore, ({ books }) => books);
const getBook = createSelector(getBookStore, ({ book }) => book);
const getSearchBooks = createSelector(getBookStore, ({ searchedBooks }) => searchedBooks);

export { getBooks, getBook, getSearchBooks };
