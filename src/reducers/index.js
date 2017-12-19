import { combineReducers } from 'redux';

import defaultReducer from './defaultReducer';
import foodReducer from './foodReducer';

const rootReducer = combineReducers({
  defaultStore: defaultReducer,
  foodStore: foodReducer
});

export default rootReducer;
