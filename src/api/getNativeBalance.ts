import { nodeUrl } from './../config/sdk';

export const getNativeBalance = async (userAddress: string) => {
  const url = nodeUrl.concat(`addresses/balance/${userAddress}`);
  const { balance } = await fetch(url).then(response => response.json());
  return balance;
}