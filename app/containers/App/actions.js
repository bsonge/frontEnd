/*
 *
 * App actions
 *
 */

import {
  DEFAULT_ACTION,
  POST_ENTRY,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function postEntry(entryType, payload) {
  return {
    type: POST_ENTRY,
    endpoint: entryType,
    payload,
  };
}
