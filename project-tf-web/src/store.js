import {
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import { pipelineInstancesSlice } from './features/pipeline_activity/pipeline_instances_slice'
import { pipelinesSlice } from './features/dashboard/pipelines_slice'

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

const store = configureStore({
  reducer: {
    pipelines: pipelinesSlice.reducer,
    pipeline_activity: pipelineInstancesSlice.reducer
  },
  middleware
});

sagaMiddleware.run(saga);

export default store;