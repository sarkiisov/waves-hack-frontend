import React, { useEffect } from 'react';
import { sdk } from '../config';
import { setNotification } from '../utils';

interface AppContextInterface {
  wallet: any;
  sdk: any;
  isConnected: () => boolean;
  connect: () => void;
}

export const WalletService = React.createContext<AppContextInterface | null>(null);

export const WalletProvider = ({children}: any) => {
  const context: AppContextInterface = {
    wallet: null,
    sdk: sdk,
    connect,
    isConnected
  }

  async function connect() {
    try {
      if(isConnected()) return;
      console.log(window.WEWallet);
      await window.WEWallet.initialPromise;
      const walletState = await window.WEWallet.publicState();
      context.wallet = walletState;
      setNotification({
        type: 'success',
        message: 'WEWallet connected'
      })
      return walletState;
    } catch (err) {
      setNotification({
        type: 'error',
        message: 'WEWallet connection error'
      })
      console.log('error', err);
    }
  }

  function isConnected () {
    if(!window.WEWallet || !context.wallet) return false;
    return true;
  }

  return (
    <WalletService.Provider value={context} children={children}/>
  )
}