import { takeEvery, call, put } from 'redux-saga/effects';
import {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from '../slices/projectSlice';

// API call to fetch projects
const fetchProjectsApi = async () => {
  const response = await fetch('https://api.github.com/users/ayush-ktr/repos');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
};

// Worker saga
function* fetchProjects() {
  try {
    const projects = yield call(fetchProjectsApi);
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsFailure(error.message));
  }
}

// Watcher saga
export default function* projectSaga() {
  yield takeEvery(fetchProjectsStart.type, fetchProjects);
}