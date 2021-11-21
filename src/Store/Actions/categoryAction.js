import axios from 'Configs/axios';

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('/category');
    dispatch({ type: 'SET_CATEGORIES', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const setCategory = (categoryID) => (dispatch) => {
  dispatch({ type: 'SET_CATEGORY', payload: categoryID });
};
