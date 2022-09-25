import React, { FC, useContext, useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./SwapCard.styles";
import { TextArea } from "../TextArea";
import { InputAdornment } from "../InputAdornment/InputAdornment";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { WalletService } from "../../service/WalletService";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/configureStore";
import { connectWallet } from "../../store/reducers/walletSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { Token, tokens } from "../../config";
import { getTokenBalance } from "../../api";
import { getBalance } from "../../utils";

const SwapCard: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();
  const {
    wallet: { wallet },
  } = useSelector((store: RootState) => store);

  const getRecieveAvailableTokens = (tokenTransfer: Token, tokens: Token[]) => {
    return tokens.filter(token => token.name !== tokenTransfer.name)
  }

  const getTokenByName = (name: string, tokens: Token[]): Token => {
    // @ts-ignore
    return tokens.find(token => token.name === name);
  }

  const [tokenTransferBalance, setTokenTransferBalance] = useState('0');
  const [tokenRecieveBalance, setTokenRecieveBalance] = useState('0');

  const [tokenTransfer, setTokenTransfer] = useState(tokens[0]);
  const [tokenRecieve, setTokenRecieve] = useState(getRecieveAvailableTokens(tokenTransfer, tokens)[0]);

  const handleSwapTokenPair = () => {
    const tempTransfer = tokenTransfer;
    const tempRecieve = tokenRecieve;
    setTokenRecieve(tempTransfer);
    setTokenTransfer(tempRecieve);
  }

  useEffect(() => {
    if(!wallet) return;
    (async function() {
      const transferTokenBalance = await getBalance(wallet.account.address, tokenTransfer);
      const recieveTokenBalance = await getBalance(wallet.account.address, tokenRecieve);
      setTokenTransferBalance(transferTokenBalance);
      setTokenRecieveBalance(recieveTokenBalance);
    })()
  }, [tokenTransfer, tokenRecieve, wallet])

  return (
    <>
      <Box className={classes.swap}>
        <Box className={classes.head}>
          <Typography variant="h3">Обменять</Typography>
        </Box>
        <Box className={classes.inputWrapper}>
          <InputAdornment 
            placeholder={"0.0000"}
            values={getRecieveAvailableTokens(tokenRecieve, tokens).map(token => token.name)}
            selectValue={tokenTransfer.name}
            onSelectChange={(e) => setTokenTransfer(getTokenByName(e.target.value, tokens))}
          />
          <Box className={classes.iconBtnWrapper}>
            {wallet && (
              <Box className={classes.balance}>
                <Typography variant="body1" className="s">
                  {"Баланс: "}
                  <span className={classes.balanceAmount}>{tokenTransferBalance}</span>
                </Typography>
              </Box>
            )}
            <IconButton
              aria-label="switch"
              onClick={handleSwapTokenPair}
              className={classes.switchBtn}
            >
              <CompareArrowsIcon />
            </IconButton>
          </Box>
          <InputAdornment 
            placeholder={"0.0000"}
            values={getRecieveAvailableTokens(tokenTransfer, tokens).map(token => token.name)}
            selectValue={tokenRecieve.name}
            onSelectChange={(e) => setTokenRecieve(getTokenByName(e.target.value, tokens))}
          />
          {wallet && (
            <Box className={classes.balance}>
              <Typography variant="body1" className="s">
                {"Баланс: "}
                <span className={classes.balanceAmount}>{tokenRecieveBalance}</span>
              </Typography>
            </Box>
          )}
        </Box>
        {wallet ? (
          <Button
            variant="contained"
            size="large"
            onClick={() => console.log("change")}
            className={classes.btnChange}
          >
            Обменять
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={() => dispatch(connectWallet())}
            className={classes.btnChange}
          >
            Подключить кошелек
          </Button>
        )}
      </Box>
    </>
  );
};

export default SwapCard;
