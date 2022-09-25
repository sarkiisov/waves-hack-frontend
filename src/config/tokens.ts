export type Token = {
  name: string;
  decimals: number;
  isNative: true;
} | {
  name: string;
  decimals: number;
  isNative: false;
  assetId: string;
}


export const tokens: Token[] = [
  {
    name: 'WEST',
    decimals: 8,
    isNative: true
  },
  {
    name: 'HACK',
    decimals: 8,
    isNative: false,
    assetId: 'DwvfguXmGPweFGfdFbFRHWMPBwXizWyGZJCwcfy22Dsj'
  },
  {
    name: 'MOON',
    decimals: 8,
    isNative: false,
    assetId: 'BBiaV5WmFnsShSr7bp3grCwjpbo7jvbuk66d5T7ByPq3'
  },
  {
    name: 'TRX1',
    decimals: 8,
    isNative: false,
    assetId: 'GSZEcVBio3QBJWaktNS1gznYw2We7qDoo8uWhz5FnYUc'
  }
]