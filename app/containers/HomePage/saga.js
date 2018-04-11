import { put, call, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_ENTRY } from './constants';
import { searchResults } from './actions';
import { API_URL } from '../App/constants';

export function* getEntry(action) {
  const searchParams = Object.keys(action.payload).map((key) =>
    `${encodeURIComponent(key)}=${encodeURIComponent(action.payload[key])}`
  ).join('&');

  const requestUrl = `${API_URL}/search/basic?${searchParams}`;


  const options = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/x-www-form-urlencoded',
    }),
  };

  try {
    const results = yield call(request, requestUrl, options);
    if (results.success) {
      yield put(searchResults(results.payload));
    } else {
      // TODO: need to add an action that handles fail and tells createStructuredSelector
      window.alert('OH NO! IT FAILED! x.x');
    }
  } catch (err) {
    console.error(err);
  }
}
// Individual exports for testing

export function* defaultSaga() {
  yield takeEvery(GET_ENTRY, getEntry);
}
export default defaultSaga;
