"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
if (!process.env.CMC_API_KEY) {
    throw Error("Coin Market Cap Api Key required!");
}
console.warn("WARN: using permissive cors!!");
exports.default = {
    port: 3030,
    cors: "*",
    cmc_api: "https://pro-api.coinmarketcap.com/",
    cmc_key: process.env.CMC_API_KEY,
    rate_limit_ms: 10 * 60 * 1000,
    rate_limit_reqs: 1000
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7SUFDMUIsTUFBTSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztDQUNwRDtBQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQTtBQUU3QyxrQkFBZTtJQUNYLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLEdBQUc7SUFDVCxPQUFPLEVBQUUsb0NBQW9DO0lBQzdDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7SUFDaEMsYUFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUM3QixlQUFlLEVBQUUsSUFBSTtDQUN4QixDQUFDIn0=