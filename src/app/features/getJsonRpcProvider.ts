import { providers } from 'ethers';

const getJsonRpcProvider = () => {
  return new providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`
  );
};

export default getJsonRpcProvider;
