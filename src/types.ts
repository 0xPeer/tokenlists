import { TokenInfo } from '@uniswap/token-lists'

export enum Network {
  Mainnet = '1',
  Goerli = '5',
  Polygon = '137',
  Arbitrum = '42161',
  Optimism = '10',
  Gnosis = '100',
}

export type PartialTokenInfoMap = {
  [address: string]: Partial<TokenInfo>
}
