/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_ENTRY,
  SEARCH_RESULTS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getEntry(entryType, payload) {
  return {
    type: GET_ENTRY,
    endpoint: entryType,
    payload,
  };
}

export function searchResults(payload) {
  return {
    type: SEARCH_RESULTS,
    payload,
  };
}
