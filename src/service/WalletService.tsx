import React, { useEffect, useState } from "react";
import { sdk } from "../config";
import { setNotification } from "../utils";

interface AppContextInterface {
  wallet: any;
  sdk: any;
  isConnected: boolean;
  connect: () => void;
}

export const WalletService = React.createContext<AppContextInterface | null>(
  null
);

export const WalletProvider = ({ children }: any) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const context: AppContextInterface = {
    wallet: null,
    sdk: sdk,
    connect,
    isConnected,
  };

  async function connect() {
    try {
      if (isConnected) return;
      await window.WEWallet.initialPromise;
      const walletState = await window.WEWallet.publicState();
      console.log(walletState);
      context.wallet = walletState;
      setIsConnected(true);
      setNotification({
        type: "success",
        message: "WEWallet connected",
      });
    } catch (err) {
      setNotification({
        type: "error",
        message: "WEWallet connection error",
      });
      console.log("error", err);
    }
  }

  // function isConnected () {
  //   if(!window.WEWallet || !context.wallet) return false;
  //   return true;
  // }

  return <WalletService.Provider value={context} children={children} />;
};
