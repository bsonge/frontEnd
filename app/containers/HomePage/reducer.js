/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SEARCH_RESULTS,
} from './constants';

const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SEARCH_RESULTS:
      console.log(state.set('searchResults', action.payload));
      return state.set('searchResults', action.payload);
    default:
      return state;
  }
}

export default homePageReducer;
