import React, { useContext, useState } from "react";
import { useStyles } from "./LiquidityCard.styles";
import { WalletService } from "../../service/WalletService";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/configureStore";
import { connectWallet } from "../../store/reducers/walletSlice";

const LiquidityCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    wallet: { wallet },
  } = useSelector((store: RootState) => store);
  const classes = useStyles();
  const navigate = useNavigate();
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  return (
    <Box className={classes.liquidity}>
      <IconButton
        aria-label="back"
        onClick={() => navigate("/pool")}
        className={classes.backBtn}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h3" align={"center"} className={classes.title}>
        Вложение ликвидности
      </Typography>
      <Input
        name="first"
        label="Вложить"
        value={firstInput}
        onChange={(e) => setFirstInput(e.target.value)}
        error={false}
        helperText=""
        className={classes.firstInput}
      />
      <Input
        name="second"
        label="Вложить"
        value={secondInput}
        onChange={(e) => setSecondInput(e.target.value)}
        error={false}
        helperText=""
        className={classes.secondInput}
      />
      <Box className={classes.feeWrapper}>
        <Typography variant={"body1"}>Комиссия за транзакцию</Typography>
        <Typography variant={"body1"}>0.005 WEST</Typography>
      </Box>
      {
        wallet
        ?
        <Button
          variant="contained"
          size="large"
          className={classes.btn}
        >
          Вложить
        </Button>
        :
        <Button
          variant="contained"
          size="large"
          className={classes.btn}
          onClick={() => dispatch(connectWallet())}
        >
          Подключить кошелек
        </Button>
      }
      
    </Box>
  );
};

export default LiquidityCard;
