import { put, call, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_ENTRY } from './constants';
import { searchResults } from './actions';
import { API_URL } from '../App/constants';

export function* getEntry(action) {
  const searchParams = Object.keys(action.payload).map((key) =>
    `${encodeURIComponent(key)}=${encodeURIComponent(action.payload[key])}`
  ).join('&');

  const requestUrl = `${API_URL}/search/basic${searchParams}`;

  const options = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/x-www-form-urlencoded',
    }),
  };

  try {
    const results = yield call(request, requestUrl, options);
    yield put(searchResults, results);
  } catch (err) {
    console.error(err);
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(GET_ENTRY, getEntry);
}
