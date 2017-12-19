import _ from 'lodash';

import {
  SUGGESTION_REQUEST,
  SUGGESTION_RESPONSE,
  SET_SUGGESTION
} from '../actions/suggestions';

const initialState = {
  restaurants: [],
  foodItem: {},
  suggestionIsFetching: false,
  suggestionStatus: null,
  suggestions: [],
  suggestion: null,
  suggestionError: null
}

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOOD_ITEM':
      return Object.assign({}, state, {
        foodItem: action.data
      });
    case SUGGESTION_REQUEST:
      return Object.assign({}, state, {
        suggestionIsFetching: true
      });
    case SUGGESTION_RESPONSE:
      const { businesses = [], error = null } = action.data;

      return Object.assign({}, state, {
        suggestionIsFetching: false,
        suggestionStatus: action.status,
        suggestions: businesses,
        suggestionError: error
      });
    case SET_SUGGESTION:
      const suggestion = _.sample(state.suggestions);
      return Object.assign({}, state, {
        suggestion
      })
    default:
      return state
  }
}

export default foodReducer;
