import { useRef, useState } from "react";
import { Button, Box, useTheme, Grid } from "@mui/material";
import styles from "./styles";

const HOLD_DURATION = 2000; // ms

const HoldToRedirectButton = ({ link, label = "Hold to Visit", ...props }) => {
  const theme = useTheme();
  const classes = styles(theme);
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const timerRef = useRef();
  const startTimeRef = useRef();

  const startHold = () => {
    setHolding(true);
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min((elapsed / HOLD_DURATION) * 100, 100));
      if (elapsed >= HOLD_DURATION) {
        clearInterval(timerRef.current);
        window.open(link, "_blank", "noopener noreferrer");
        setProgress(0);
        setHolding(false);
      }
    }, 16);
  };

  const stopHold = () => {
    clearInterval(timerRef.current);
    setProgress(0);
    setHolding(false);
  };

  return (
    <Grid container sx={classes.buttonContainer}>
      <Button
        variant="contained"
        sx={classes.holdToRedirectButton}
        onMouseDown={startHold}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onTouchStart={startHold}
        onTouchEnd={stopHold}
        disableRipple={true}
        {...props}
      >
        {/* Progress fill overlay */}
        <Box
          sx={{
            ...classes.holdToRedirectButtonProgress,
            width: `${progress * 1.2}%`,
            transition: holding ? "width 0.1s" : "width 0.2s",
          }}
        />
        {/* Button label */}
        <Box
          sx={{
            ...classes.holdToRedirectButtonLabel,
            color:
              progress > 50
                ? theme.palette.primary.contrastText || "#fff"
                : theme.palette.text.primary,
          }}
        >
          {label}
        </Box>
      </Button>
    </Grid>
  );
};

export default HoldToRedirectButton;
