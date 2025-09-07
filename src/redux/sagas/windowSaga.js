import { call, takeEvery } from 'redux-saga/effects';
import { toggleMaximize, toggleMinimize } from '../slices/terminalSlice';

function printConsole() {
    console.log('Hello from windowSaga');
}

function* handleMaximize() {
  yield call(printConsole);
  console.log('Window maximized');
}

function* handleMinimize() {
  yield call(printConsole);
  console.log('Window minimized');
}

export default function* windowSaga() {
  yield takeEvery(toggleMaximize.type, handleMaximize);
  yield takeEvery(toggleMinimize.type, handleMinimize);
}