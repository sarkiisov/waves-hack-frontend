import BigNumber from 'bignumber.js';

export const getTokenAmount = (amount: string | number, decimals: number = 8): string => {
  if(amount === '') return '0';

  if (typeof amount === 'number') {
    amount.toString();
  }

  const tokenAmount = new BigNumber(amount).dividedBy(new BigNumber(10).pow(decimals));

  return parseFloat(tokenAmount.toFixed(4)).toString();
}