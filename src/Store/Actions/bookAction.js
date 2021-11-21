import axios from 'Configs/axios';

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await axios.get('/book');
    dispatch({ type: 'SET_BOOKS', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPageBooks = (page, categoryID) => async (dispatch) => {
  try {
    const response = await axios.get(`/book${page}`, {
      params: {
        categoryID: categoryID,
      },
    });
    dispatch({ type: 'SET_BOOKS', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchBooks = (page, bookName) => async (dispatch) => {
  try {
    const response = await axios.get(`/search/static${page}`, {
      params: {
        bookName: bookName,
      },
    });
    dispatch({ type: 'SET_SEARCHED_BOOKS', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchBook = (bookID) => async (dispatch) => {
  try {
    const response = await axios.get(`/book/${bookID}`);
    dispatch({ type: 'SET_BOOK', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
