// import { take, call, put, select } from 'redux-saga/effects';

/* eslint no-alert: "warn" */
import { call, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { POST_REGISTRATION } from './constants';
import { API_URL } from '../App/constants';

// TODO: A message from the app should appear in the failure and succsess case
//       That is from the app and not window alert

export function* postEntry(action) {
  const requestUrl = `${API_URL}/${action.endpoint}`;

  const searchParams = Object.keys(action.payload).map((key) =>
    `${encodeURIComponent(key)}=${encodeURIComponent(action.payload[key])}`
  ).join('&');


  const options = {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/x-www-form-urlencoded',
    }),
    body: searchParams,
  };

  try {
    yield call(request, requestUrl, options);
  } catch (err) {
    console.error(err);
    return;
  }

  window.alert('User Registered!');
}
// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(POST_REGISTRATION, postEntry);
}
