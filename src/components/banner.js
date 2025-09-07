import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    textAlign: "left",
    fontFamily: "monospace",
  },
  asciiArt: {
    color: "rgb(255, 255, 255)", // White color for ASCII art
    fontSize: "1rem",
    lineHeight: "1.2",
  },
  text: {
    color: "rgb(156, 163, 175)", // Gray color for additional text
    fontSize: "0.9rem",
    marginTop: "16px",
  },
  help: {
    color: "rgb(253, 155, 219)", // Pink color for 'help'
  },
});

const Banner = () => {
  const classes = useStyles();

  const asciiText = [
    " █████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗",
    "██╔══██╗╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║",
    "███████║ ╚████╔╝ ██║   ██║███████╗███████║",
    "██╔══██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║",
    "██║  ██║   ██║   ╚██████╔╝███████║██║  ██║",
    "╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝",
  ];

  const renderAsciiArt = () => {
    const banner = [];
    asciiText.forEach((ele) => {
      let bannerString = "";
      for (let i = 0; i < ele.length; i++) {
        if (ele[i] === " ") {
          bannerString += "\u00A0"; // Non-breaking space
        } else {
          bannerString += ele[i];
        }
      }
      banner.push(<pre key={banner.length}>{bannerString}</pre>);
    });
    return banner;
  };

  return (
    <div className={classes.container}>
      <div className={classes.asciiArt}>{renderAsciiArt()}</div>
      <div className={classes.text}>
        Full Stack Developer
        <br />
        Welcome to System X86_64 v1.0.0
        <br /> <br />
        Type <span className={classes.help}>'help'</span> for a list of all available commands.
      </div>
    </div>
  );
};

export default Banner;