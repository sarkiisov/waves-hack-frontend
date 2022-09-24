import React, { FC, useContext } from "react";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./SwapCard.styles";
import { TextArea } from "../TextArea";
import { InputAdornment } from "../InputAdornment/InputAdornment";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { WalletService } from "../../service/WalletService";

const SwapCard: FC = () => {
  const walletContext = useContext(WalletService);
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
        {
          walletContext?.isConnected
          ?
          <Button
            variant="contained"
            size="large"
            onClick={() => console.log("change")}
            className={classes.btnChange}
          >
            Обменять
          </Button>
          :
          <Button
            variant="contained"
            size="large"
            onClick={async () => await walletContext?.connect()}
            className={classes.btnChange}
          >
            Подключить кошелек
          </Button>
        }
      </Box>
    </>
  );
};

export default SwapCard;
