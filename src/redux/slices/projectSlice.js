import { createSlice, isAction } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  loading: false,
  error: null,
  isMaximized: false,
  isMinimized: false,
  isClosed: true,
  isActive: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    fetchProjectsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProjectsSuccess(state, action) {
      state.loading = false;
      state.projects = action.payload;
    },
    fetchProjectsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    toggleMaximize(state) {
      state.isMaximized = !state.isMaximized;
      state.isMinimized = false;
    },
    toggleMinimize(state) {
      state.isMinimized = !state.isMinimized;
      state.isMaximized = false;
    },
    closeProject(state, action) {
      state.isClosed = action.payload;
    },
    toggleActive(state) {
      state.isActive = !state.isActive;
    }
  },
});

export const {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  toggleMaximize,
  toggleMinimize,
  closeProject,
  toggleActive
} = projectSlice.actions;

export default projectSlice.reducer;