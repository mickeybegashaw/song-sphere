import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { StatisticsData } from "../../src/types";

interface StatisticsState {
  data: StatisticsData | null;
  loading: boolean;
  error: string | null;
  lastUpdated: string | null;
}

const initialState: StatisticsState = {
  data: null,
  loading: false,
  error: null,
  lastUpdated: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    fetchStatsRequest(state) {
      state.loading = true;
      state.error = null;
    },

    fetchStatsSuccess(state, action: PayloadAction<StatisticsData>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
      state.lastUpdated = new Date().toISOString();
    },

    fetchStatsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const { fetchStatsRequest, fetchStatsSuccess, fetchStatsFailure } =
  statisticsSlice.actions;

export default statisticsSlice.reducer;
