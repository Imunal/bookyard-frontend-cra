const initialState = {
  categories: [],
  category: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES': {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case 'SET_CATEGORY': {
      return {
        ...state,
        category: action.payload,
      };
    }
    default:
      return state;
  }
};

export default categoryReducer;
