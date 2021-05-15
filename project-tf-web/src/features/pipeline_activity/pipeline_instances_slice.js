import {createSlice} from "@reduxjs/toolkit";

export const pipelineInstancesSlice = createSlice({
  name: "pipeline_activity",
  initialState: {
    pipeline: {},
    pipeline_instances: []
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        ...action.payload,
        fetched_at: Date.now()
      };
    }
  }
});

export const { fetchData } = pipelineInstancesSlice.actions;