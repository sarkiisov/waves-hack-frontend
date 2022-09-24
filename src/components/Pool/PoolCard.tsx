import React, { ChangeEvent, FC, useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useStyles } from "./PoolCard.styles";
import { SelectValue } from "../../types/components";
import { Select } from "../Select";
import { Link, useNavigate } from "react-router-dom";

const networkValues: SelectValue[] = [
  {
    value: "WEST/HACK",
    label: "WEST/HACK",
  },
  {
    value: "HACK2/WEST",
    label: "HACK2/WEST",
  },
];

const PoolCard: FC = () => {
  const classes = useStyles();
  const [netValue, setNetValue] = useState(networkValues[0].value);
  const navigate = useNavigate();
  const getSelectHandler =
    (callback: {
      (value: React.SetStateAction<string>): void;
      (value: React.SetStateAction<string>): void;
      (arg0: any): void;
    }) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      callback(event.target.value);
    };

  const handleChangeNet = getSelectHandler(setNetValue);
  return (
    <>
      <Box className={classes.pool}>
        <Box className={classes.head}>
          <Select
            size="medium"
            values={networkValues}
            value={netValue}
            onChange={handleChangeNet}
          />
        </Box>
        <Typography variant="h6" className={classes.title}>
          Ваша ликвидность
        </Typography>
        <Box className={classes.info}>
          <Box className={classes.infoItem}>
            <Box className={classes.infoText}>
              <Typography variant="body1">
                {netValue.substring(0, netValue.indexOf("/"))} в пуле
              </Typography>
            </Box>
            <Box className={classes.infoCount}>
              <Typography variant="body1">0</Typography>
            </Box>
          </Box>
          <Box className={classes.infoItem}>
            <Box className={classes.infoText}>
              <Typography variant="body1">
                {netValue.substring(netValue.indexOf("/") + 1)} в пуле
              </Typography>
            </Box>
            <Box className={classes.infoCount}>
              <Typography variant="body1">0</Typography>
            </Box>
          </Box>
          <Box className={classes.infoItem}>
            <Box className={classes.infoText}>
              <Typography variant="body1">Долевые токены в кошельке</Typography>
            </Box>
            <Box className={classes.infoCount}>
              <Typography variant="body1">0</Typography>
            </Box>
          </Box>
          <Box className={classes.infoItem}>
            <Box className={classes.infoText}>
              <Typography variant="body1">Долевые токены в фарминге</Typography>
            </Box>
            <Box className={classes.infoCount}>
              <Typography variant="body1">0</Typography>
            </Box>
          </Box>
          <Box className={classes.infoItem}>
            <Box className={classes.infoText}>
              <Typography variant="body1">Ваша доля в пуле</Typography>
            </Box>
            <Box className={classes.infoCount}>
              <Typography variant="body1">0%</Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.btnWrapper}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/add-liquidity")}
          >
            Вложить
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Вывести
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PoolCard;
