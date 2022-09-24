import React from "react";

import PoolCard from "../../components/Pool/PoolCard";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import LiquidityCard from "../../components/AddLiquidity/LiquidityCard";

export const AddLiquidity = () => {
  return (
    <>
      <Box>
        <LiquidityCard />
      </Box>
    </>
  );
};
