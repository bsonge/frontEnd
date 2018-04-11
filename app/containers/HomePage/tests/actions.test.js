
import {
  defaultAction,
  getEntry,
  searchResults,
} from '../actions';
import {
  DEFAULT_ACTION,
  GET_ENTRY,
  SEARCH_RESULTS,
} from '../constants';

describe('HomePage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
  describe('Get Entry', () => {
    it('has a type of GET_ENTRY, an endpoint, and a payload', () => {
      const payload = 'test';
      const example = {
        type: GET_ENTRY,
        endpoint: 'end',
        payload,
      };
      expect(getEntry('end', 'test')).toEqual(example);
    });
  });
  describe('Search Results', () => {
    it('has a type of SEARCH_RESULTS', () => {
      const payload = 'test';
      const expected = {
        type: SEARCH_RESULTS,
        payload,
      };
      expect(searchResults('test')).toEqual(expected);
    });
  });
});
