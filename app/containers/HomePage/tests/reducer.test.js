
import { fromJS } from 'immutable';
import homePageReducer from '../reducer';
import {
  SEARCH_RESULTS,
} from '../constants';

describe('homePageReducer', () => {
  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(fromJS({}));
  });
  it('returns the search results', () => {
    const payload = 'test';
    const expected = {
      type: SEARCH_RESULTS,
      payload,
    };
    expect(homePageReducer(fromJS({}), expected).size).toEqual(1);
  });
});
