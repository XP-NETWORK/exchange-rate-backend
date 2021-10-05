require('dotenv').config();

if (!process.env.CMC_API_KEY) {
    throw Error('Coin Market Cap Api Key required!');
}

console.warn('WARN: using permissive cors!!');

export default {
    port: 3030,
    cors: '*',
    cmc_api: 'https://pro-api.coinmarketcap.com/',
    cmc_key: process.env.CMC_API_KEY,
    rate_limit_ms: 10 * 60 * 1000, // 10 mins
    rate_limit_reqs: 1000,
};
