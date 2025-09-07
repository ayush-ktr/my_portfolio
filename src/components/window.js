import React from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  window: {
    width: "75%",
    height: "70%",
    backgroundColor: "#0e0f0f",
    color: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    transition: "all 0.3s ease",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  maximized: {
    width: "100%",
    height: "100%",
    borderRadius: "0",
    top: "0",
    left: "0",
    transform: "none",
  },
  minimized: {
    width: "17%",
    height: "5%",
    top: "auto",
    left: "10px",
    bottom: "10px",
    transform: "none",
    zIndex: 1000,
  },
  windowHeader: {
    backgroundColor: "#333333",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  buttons: {
    display: "flex",
    gap: "8px",
    position: "absolute",
    left: "10px",
  },
  button: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    display: "inline-block",
    cursor: "pointer",
  },
  close: {
    backgroundColor: "#ff5f56",
  },
  minimize: {
    backgroundColor: "#ffbd2e",
  },
  maximize: {
    backgroundColor: "#27c93f",
  },
  title: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "bold",
    margin: "0 auto",
    textAlign: "center",
  },
  windowBody: {
    flex: 1,
    padding: "15px",
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "14px",
    overflowY: "auto",
  },
});

const Window = ({
  title,
  onWindowClose,
  isMaximized,
  isMinimized,
  onMaximize,
  onMinimize,
  children,
}) => {
  const classes = useStyles();

  const closeWindow = () => {
    onWindowClose();
  };

  return (
    <div
      id="window"
      className={clsx(classes.window, {
        [classes.maximized]: isMaximized,
        [classes.minimized]: isMinimized,
      })}
    >
      <div id="windowheader" className={classes.windowHeader}>
        <div className={classes.buttons}>
          <span
            className={clsx(classes.button, classes.close)}
            onClick={closeWindow}
          ></span>
          <span
            className={clsx(classes.button, classes.minimize)}
            onClick={onMinimize}
          ></span>
          <span
            className={clsx(classes.button, classes.maximize)}
            onClick={onMaximize}
          ></span>
        </div>
        <div className={classes.title}>{title}</div>
      </div>
      {!isMinimized && <div className={classes.windowBody}>{children}</div>}
    </div>
  );
};

export default Window;