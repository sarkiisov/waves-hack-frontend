import path from 'path';
import { nodeUrl } from './../config/sdk';

export const getTokenBalance = async (userAddress: string, assetId: string) => {
  const url = new URL(path.join(nodeUrl, `/assets/balance/${userAddress}/${assetId}`)).toString();
  const { balance } = await fetch(url).then(response => response.json());
  return balance;
}