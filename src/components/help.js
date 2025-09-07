import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  helpContainer: {
    color: "#9ca3af",
    fontFamily: "monospace",
    whiteSpace: "pre-line",
    margin: "0.5rem 0rem",
  },
  commandLine: {
    display: "flex",
    marginBottom: "0.25rem",
  },
  command: {
    color: "#0f0",
    minWidth: "110px",
    display: "inline-block",
  },
  description: {
    color: "#9ca3af",
  },
  instructions: {
    color: "#9ca3af",
    marginTop: "0.5rem",
  },
  keyHighlight: {
    color: "#87CEEB", // Light blue color
    fontWeight: "bold",
  },
  title: {
    color: "#9ca3af",
    marginBottom: "0.5rem",
  },
});

const Help = () => {
  const classes = useStyles();
  const { commands } = useSelector((state) => state.terminal);

  return (
    <div className={classes.helpContainer}>
      <div className={classes.title}>Available commands:</div>

      {commands.map((cmd, idx) => (
        <div key={idx} className={classes.commandLine}>
          <span className={classes.command}>{cmd.key}</span>
          <span className={classes.description}>- {cmd.description}</span>
        </div>
      ))}

      <div className={classes.instructions}>
        <div>
          Press <span className={classes.keyHighlight}>[Tab]</span> to auto
          complete
        </div>
        <div>
          Press <span className={classes.keyHighlight}>[ESC]</span> to clear the
          input
        </div>
        <div>
          Press <span className={classes.keyHighlight}>[⬆️ and ⬇️]</span> arrow
          to navigate between commands
        </div>
      </div>
    </div>
  );
};

export default Help;
