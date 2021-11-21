const initialState = {
  book: [],
  books: null,
  searchedBooks: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOK': {
      return {
        ...state,
        book: action.payload,
      };
    }
    case 'SET_BOOKS': {
      return {
        ...state,
        books: action.payload,
      };
    }
    case 'SET_SEARCHED_BOOKS': {
      return {
        ...state,
        searchedBooks: action.payload,
      };
    }
    default:
      return state;
  }
};

export default bookReducer;
