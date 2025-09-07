import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMaximized: false,
  isMinimized: false,
  isActive: true,
  isTerminalCleared: false,
  terminalOutput: [{"command":""}],
  commands: [
    { key: "whoami", description: "Who am i?" },
    { key: "skills", description: "View my current skills" },
    { key: "projects", description: "View all my Projects" },
    { key: "repo", description: "View the project source. [repo {project_name}]" },
    { key: "socials", description: "View my Socials" },
    { key: "clear", description: "Clear the terminal" },
  ]
};

const windowSlice = createSlice({
  name: "terminal",
  initialState,
  reducers: {
    toggleMaximize(state) {
      state.isMaximized = !state.isMaximized;
      state.isMinimized = false;
    },
    toggleMinimize(state) {
      state.isMinimized = !state.isMinimized;
      state.isMaximized = false;
    },
    toggleActive(state) {
      state.isActive = !state.isActive;
    },
    appendTerminalOutput(state, action) {
      state.terminalOutput = [...state.terminalOutput, action.payload];
    },
    clearTerminal(state) {
      state.terminalOutput = [{"command":""}];
      state.isTerminalCleared = true;
    }
  },
});

export const {
  toggleMaximize,
  toggleMinimize,
  toggleActive,
  appendTerminalOutput,
} = windowSlice.actions;
export default windowSlice.reducer;
