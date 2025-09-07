import { all } from 'redux-saga/effects';
import projectSaga from './sagas/projectSaga';
import windowSaga from './sagas/windowSaga';

console.log('windowSaga:', windowSaga); // Should log the function
console.log('projectSaga:', projectSaga); // Should log the function

export default function* rootSaga() {
  yield all([
    windowSaga(),
    projectSaga(),
  ]);
}