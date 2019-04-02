import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.blockcypher.com/v1/btc/main'
});