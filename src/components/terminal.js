import { useRef, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useSelector } from "react-redux";
import Banner from "./banner";

const useStyles = makeStyles({
  terminalMain: {
    padding: "0.5rem",
    borderRadius: "8px",
    minHeight: "200px",
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
    padding: "0.5rem 0rem",
    outline: "none",
    width: "85%",
    cursor: "text",
  },
});

const Terminal = () => {
  const classes = useStyles();

  const { terminalOutput, isTerminalCleared } = useSelector(
    (state) => state.terminal
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [terminalOutput]);

  const hostNameComponent = (
    <span className={classes.hostName}>ayush@system:$ </span>
  );

  const handleTerminalMessage = (output, idx) => {
    if (output.command === "") {
      return (
        <div key={idx} className={classes.message}>
          {hostNameComponent}
          <input type="text" className={classes.input} ref={inputRef} />
        </div>
      );
    }
  };

  console.log(terminalOutput);

  return (
    <div className={classes.terminalMain}>
      {!isTerminalCleared && <Banner />}
      {terminalOutput.map((msg, idx) => handleTerminalMessage(msg, idx))}
    </div>
  );
};

export default Terminal;
