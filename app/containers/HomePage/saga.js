import { call, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_ENTRY } from './constants';
import { API_URL } from '../App/constants';

export function* getEntry(action) {
  const requestUrl = `${API_URL}/${action.endpoint}`;

  const searchParams = Object.keys(action.payload).map((key) =>
    `${encodeURIComponent(key)}=${encodeURIComponent(action.payload[key])}`
  ).join('&');


  const options = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/x-www-form-urlencoded',
    }),
    body: searchParams,
  };

  try {
    yield call(request, requestUrl, options);
  } catch (err) {
    console.error(err);
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(GET_ENTRY, getEntry);
}
