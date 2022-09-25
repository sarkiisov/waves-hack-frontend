import path from 'path';
import { nodeUrl } from './../config/sdk';

export const getNativeBalance = async (userAddress: string) => {
  const url = new URL(path.join(nodeUrl, `/addresses/balance/${userAddress}`)).toString();
  const { balance } = await fetch(url).then(response => response.json());
  return balance;
}