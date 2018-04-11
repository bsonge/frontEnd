import { fromJS } from 'immutable';
// import { createSelector } from 'reselect';
import { selectHomePageDomain } from '../selectors';

describe('selectHomePageDomain', () => {
  it('Expect to have unit tests specifie', () => {
    const state = { homePage: 'test' };
    expect(selectHomePageDomain(fromJS(state))).toEqual('test');
  });
});
