import React, { useContext } from "react";

import PoolCard from "../../components/Pool/PoolCard";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { WalletService } from "../../service/WalletService";

export const Pool = () => {
  return (
    <>
      <Box>
        <PoolCard />
      </Box>
    </>
  );
};
