import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Window from "./components/window";
import clsx from "clsx";
import Terminal from "./components/terminal";
import {
  toggleMaximize as toggleTerminalMaximize,
  toggleMinimize as toggleTerminalMinimize,
  toggleActive as toggleTerminalActive,
} from "./redux/slices/terminalSlice";
import {
  toggleMaximize as toggleProjectMaximize,
  toggleMinimize as toggleProjectMinimize,
  closeProject as closeProject,
  toggleActive as toggleProjectActive,
} from "./redux/slices/projectSlice";

// Define styles using makeStyles
const useStyles = makeStyles({
  appContainer: {
    height: "100vh",
    backgroundColor: "#2b2e30",
  },
});

const App = () => {
  const classes = useStyles(); // Use the styles
  const dispatch = useDispatch();

  const { isMaximized: isTerminalMaximized, isMinimized: isTerminalMinimized } =
    useSelector((state) => state.terminal);
  const {
    isMaximized: isProjectMaximized,
    isMinimized: isProjectMinimized,
    isClosed,
  } = useSelector((state) => state.project);

  const handleTerminalWindowClose = () => {
    window.close();
  };

  const handleProjectWindowClose = () => {
    dispatch(closeProject(true));
  };

  const handleTerminalMaximize = () => {
    if (!isClosed) {
      dispatch(toggleProjectMinimize());
    }
    dispatch(toggleTerminalMaximize());
  };

  const handleTerminalMinimize = () => {
    if (!isClosed) {
      dispatch(toggleProjectMinimize());
    }
    dispatch(toggleTerminalMinimize());
  };

  const handleProjectMaximize = () => {
    dispatch(toggleTerminalMinimize());
    dispatch(toggleProjectMaximize());
  };

  const handleProjectMinimize = () => {
    dispatch(toggleTerminalMinimize());
    dispatch(toggleProjectMinimize());
  };

  return (
    <div className={classes.appContainer}>
      <button onClick={() => dispatch(closeProject(false))}>Clieck me</button>
      {/* First Window */}
      <Window
        onWindowClose={handleTerminalWindowClose}
        title={"Ayush@system"}
        isMaximized={isTerminalMaximized}
        isMinimized={isTerminalMinimized}
        onMaximize={handleTerminalMaximize}
        onMinimize={handleTerminalMinimize}
      >
        <Terminal />
      </Window>

      {/* Second Window */}
      {!isClosed && (
        <Window
          onWindowClose={handleProjectWindowClose}
          title={"Project Window"}
          isMaximized={isProjectMaximized}
          isMinimized={isProjectMinimized}
          onMaximize={handleProjectMaximize}
          onMinimize={handleProjectMinimize}
        >
          <iframe
            src="https://github1s.com/ayush-ktr/my_portfolio/"
            title="GitHub1s"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </Window>
      )}
    </div>
  );
};

export default App;
