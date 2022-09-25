import { nodeUrl } from './../config/sdk';

export const getTokenBalance = async (userAddress: string, assetId: string) => {
  const url = nodeUrl.concat(`assets/balance/${userAddress}/${assetId}`);
  const { balance } = await fetch(url).then(response => response.json());
  return balance;
}