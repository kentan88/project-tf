import {createSlice} from "@reduxjs/toolkit";

export const pipelinesSlice = createSlice({
  name: "pipelines",
  initialState: {
    pipelines: []
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        pipelines: action.payload.pipelines,
        fetched_at: Date.now()
      };
    }
  }
});

export const { fetchData } = pipelinesSlice.actions;