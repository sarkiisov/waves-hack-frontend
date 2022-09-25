import { setNotification } from './setNotification';
import { getTokenBalance as getTokenBalanceApi } from '../api/getTokenBalance';
import { getNativeBalance } from '../api/getNativeBalance';
import { Token } from "../config";
import { getTokenAmount } from './getTokenAmount';


export const getBalance = async (userAddress: string, token: Token) => {
  try {
    if(token.isNative) {
      const balance = await getNativeBalance(userAddress)
      return getTokenAmount(balance, token.decimals);
    }
    if(!token.isNative) {
      const balance = await getTokenBalanceApi(userAddress, token.assetId)
      return getTokenAmount(balance, token.decimals);
    }  
  } catch(err) {
    setNotification({
      type: 'error',
      message: 'WE API fetch balance failed'
    })
  }
  return '0'
}