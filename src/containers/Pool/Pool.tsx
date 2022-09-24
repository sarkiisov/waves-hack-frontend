import React, { useContext } from "react";

import PoolCard from "../../components/Pool/PoolCard";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { WalletService } from "../../service/WalletService";

export const Pool = () => {
  const walletContext = useContext(WalletService);

  return (
    <>
      <Box>
        <PoolCard />
        <button onClick={() => console.log(walletContext?.isConnected()) }>isConnected</button>
        <button onClick={async () => {
          const res = await walletContext?.connect()
          console.log(res);
        } }>Connect</button>
        <Link to="/">swap</Link>
      </Box>
    </>
  );
};
