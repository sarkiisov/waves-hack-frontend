import React, { FC } from "react";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./SwapCard.styles";
import { TextArea } from "../TextArea";
import { InputAdornment } from "../InputAdornment/InputAdornment";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";

const SwapCard: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.swap}>
        <Box className={classes.head}>
          <Typography variant="h3">Обменять</Typography>
        </Box>
        <Box className={classes.inputWrapper}>
          <InputAdornment placeholder={"0.0000"} />
          <IconButton
            aria-label="switch"
            onClick={() => console.log("switch")}
            className={classes.switchBtn}
          >
            <CompareArrowsIcon />
          </IconButton>
          <InputAdornment placeholder={"0.0000"} />
        </Box>
        <Button
          variant="contained"
          size="large"
          onClick={() => console.log("change")}
          className={classes.btnChange}
        >
          Обменять
        </Button>
      </Box>
    </>
  );
};

export default SwapCard;
