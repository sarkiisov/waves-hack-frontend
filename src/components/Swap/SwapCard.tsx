import React, { FC } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./SwapCard.styles";

const SwapCard: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.swap}>
        <Box className={classes.head}>
          <Typography variant="h3">Exchange</Typography>
        </Box>
      </Box>
    </>
  );
};

export default SwapCard;
