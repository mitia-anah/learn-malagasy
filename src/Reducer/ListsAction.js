const categoryList = require('../data/categories.json');

export const loadCategory = data => {
  return {
    type: LOAD_CATEGORY,
    payload: data,
  };
};

export const asyncLoadCategory = () => {
  return async dispatch => {
    const response = await fetch(categoryList);
    const data = response.data.list;
    dispatch(loadCategory(data));
  };
};
