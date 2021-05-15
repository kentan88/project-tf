import {call, takeEvery, put} from "redux-saga/effects";
import Axios from "axios";
import { fetchData as fetchPipelines } from "./features/dashboard/pipelines_slice";
import { fetchData as fetchPipelineActivity } from "./features/pipeline_activity/pipeline_instances_slice";

import {sagaActions} from "./sagaActions";

let callAPI = async ({url, method, data}) =>
  await Axios({
    url,
    method,
    data
  });

// export function* fetchDataSaga({ path }) {
//   try {
//     let result = yield call(() =>
//       callAPI({url: `${process.env.REACT_APP_API_URL}/${path}`})
//     );
//     yield put(fetchData(result.data));
//   } catch (e) {
//     yield put({type: "TODO_FETCH_FAILED"});
//   }
// }

export function* fetchPipelinesSaga() {
  try {
    let result = yield call(() =>
      callAPI({url: `${process.env.REACT_APP_API_URL}/pipelines`})
    );
    yield put(fetchPipelines(result.data));
  } catch (e) {
    yield put({type: "FETCH_FAILED"});
  }
}

export function* fetchPipelineActivitySaga({ pipelineId }) {
  try {
    let result = yield call(() =>
      callAPI({url: `${process.env.REACT_APP_API_URL}/pipelines/${pipelineId}`})
    );
    yield put(fetchPipelineActivity(result.data));
  } catch (e) {
    yield put({type: "FETCH_FAILED"});
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_PIPELINES, fetchPipelinesSaga);
  yield takeEvery(sagaActions.FETCH_PIPELINE_ACTIVITY, fetchPipelineActivitySaga);
}
