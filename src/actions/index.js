import blockChainInfo from '../apis/blockChainInfo';
import _ from 'lodash';

export const fetchPosts = () => {
  return async () => {
    const response = await blockChainInfo.get('https://api.blockcypher.com/v1/btc/main/addrs/1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD/balance')
    console.log(response);
  };
};
