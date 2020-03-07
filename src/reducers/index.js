import { combineReducers } from 'redux';

import SourceReducer from './source.reducer';


const reducers = combineReducers({
  source: SourceReducer,
});

export default reducers;
