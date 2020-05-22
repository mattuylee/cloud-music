import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/recommend/store/index';
import { reducer as singersReducer } from '../application/singers/store/index';
import { reducer as rankReducer } from '../application/rank/store/index';

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
});