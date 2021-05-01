import {combineReducers} from 'redux';
import {LOAD_CATEGORY} from '../Reducer/ListsAction';

const initialState = {
  list: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
};

export default combineReducers({category: categoryReducer});
