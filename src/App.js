import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from 'Store';
import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { IndexView, ContactView, FavouritesView, BookView, SearchView } from './Views';
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route index element={<IndexView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/favourites" element={<FavouritesView />} />
        <Route path="/book/:bookID" element={<BookView />} />
        <Route path="/search/:searchParams" element={<SearchView />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
