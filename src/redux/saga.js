import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_CHART_DATA, SET_CHART_DATA, FETCH_CHART_DATA_FAILED } from './types/types'

export default function* watcherSaga(){
  yield takeEvery(FETCH_CHART_DATA,
  
    function* workerSaga(){
      try {
        const payload = yield call(getSalesData);
        yield put({ type: SET_CHART_DATA, payload });
      } catch (e) {
        yield put({ type: FETCH_CHART_DATA_FAILED, payload: e });
      }
    }
  )
}

function getSalesData() {
  return fetch("https://60225861ae8f8700177df512.mockapi.io/sales")
    .then(response =>
      response.json()
    )
}
