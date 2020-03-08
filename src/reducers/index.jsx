import { combineReducers } from 'redux';

import SourceReducer from './source.reducer';
import ChunksReducer from './chunks.reducer';


const reducers = combineReducers({
  source: SourceReducer,
  chunks: ChunksReducer
});

export default reducers;
