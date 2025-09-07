import { useRef, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import {
  appendTerminalOutput,
  clearTerminal,
} from "../redux/slices/terminalSlice";
import Banner from "./banner";
import Help from "./help";

const useStyles = makeStyles({
  terminalMain: {
    padding: "0.5rem",
    borderRadius: "8px",
    minHeight: "100%",
    maxHeight: "100%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  message: {
    color: "#9ca3af",
    fontFamily: "monospace",
    marginBottom: "0.5rem",
  },
  hostName: {
    color: "#0f0",
  },
  input: {
    background: "#0e0f0f",
    color: "#0f0",
    fontFamily: "monospace",
    border: "none",
    borderRadius: "4px",
    padding: "0.2rem 0rem",
    outline: "none",
    width: "85%",
    cursor: "text",
    caretColor: "#ffffff",
  },
});

const Terminal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentInput, setCurrentInput] = useState("");

  const { terminalOutput, isTerminalCleared, commands } = useSelector(
    (state) => state.terminal
  );

  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Auto-scroll to bottom when terminal output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  // Focus input when terminal output changes
  useEffect(() => {
    inputRef.current?.focus();
  }, [terminalOutput]);

  const hostNameComponent = (
    <span className={classes.hostName}>ayush@system:$ </span>
  );

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setCurrentInput("");
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      // Logic
    } else if (e.key === "Enter") {
      const command = currentInput.trim();

      // Add the command to output
      dispatch(appendTerminalOutput({ command: currentInput }));
      setCurrentInput("");

      if (command === "clear") {
        dispatch(clearTerminal());
      }
    }
  };

  const handleTerminalMessage = (output, idx) => {
    switch (output.command) {
      case "":
        return (
          <div key={idx} className={classes.message}>
            {hostNameComponent}
            <input type="text" className={classes.input} disabled />
          </div>
        );
      case "help":
        return (
          <div key={idx} className={classes.message}>
            {hostNameComponent}help
            <Help />
          </div>
        );
      default:
        return (
          <div key={idx} className={classes.message}>
            {hostNameComponent}
            {output.command}
            <br />
            System x86_64: command not found
            <br />
            Type 'help' to see available commands.
          </div>
        );
    }
  };

  return (
    <div className={classes.terminalMain} ref={terminalRef}>
      {!isTerminalCleared && <Banner />}
      {terminalOutput.map((msg, idx) => handleTerminalMessage(msg, idx))}
      <div className={classes.message}>
        {hostNameComponent}
        <input
          type="text"
          className={classes.input}
          ref={inputRef}
          onChange={(e) => setCurrentInput(e.target.value)}
          value={currentInput}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Terminal;
