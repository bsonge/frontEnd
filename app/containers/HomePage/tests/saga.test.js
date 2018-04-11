/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import { defaultSaga, getEntry } from '../saga';
import { GET_ENTRY } from '../constants';

const generator = defaultSaga();

describe('defaultSaga Saga', () => {
  it('Expect to take every with getEntry', () => {
    expect(generator.next().value).toEqual(takeEvery(GET_ENTRY, getEntry));
  });
});
