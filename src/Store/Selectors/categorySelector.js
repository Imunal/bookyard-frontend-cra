import { createSelector } from 'reselect';

const getBookStore = (state) => state.rootReducer.category;

const getCategories = createSelector(getBookStore, ({ categories }) => categories);
const getCategory = createSelector(getBookStore, ({ category }) => category);

export { getCategories, getCategory };
