"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmcCachedExchange = void 0;
const crypto_exchange_rate_1 = require("crypto-exchange-rate");
const BatchExchangeRateService_1 = require("crypto-exchange-rate/dist/model/coinmarketcap/BatchExchangeRateService");
const CMCIdMapper_1 = require("crypto-exchange-rate/dist/model/coinmarketcap/CMCIdMapper");
const ExchangeRateDtoMapper_1 = require("crypto-exchange-rate/dist/model/coinmarketcap/ExchangeRateDtoMapper");
const config_1 = __importDefault(require("../config"));
const idMapper = (0, CMCIdMapper_1.cmcIdMapper)();
exports.cmcCachedExchange = (0, crypto_exchange_rate_1.cachedExchangeRateRepo)((0, crypto_exchange_rate_1.cmcBatchExchangeRepo)((0, BatchExchangeRateService_1.cmcBatchExchangeRateService)(config_1.default.cmc_api, config_1.default.cmc_key), idMapper, (0, ExchangeRateDtoMapper_1.exchangeRateDtoMapper)(idMapper)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NpbmdsZXRvbnMvY21jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtEQUFvRjtBQUNwRixxSEFBcUg7QUFDckgsMkZBQXdGO0FBQ3hGLCtHQUE0RztBQUM1Ryx1REFBK0I7QUFFL0IsTUFBTSxRQUFRLEdBQUcsSUFBQSx5QkFBVyxHQUFFLENBQUM7QUFFbEIsUUFBQSxpQkFBaUIsR0FBRyxJQUFBLDZDQUFzQixFQUFDLElBQUEsMkNBQW9CLEVBQ3hFLElBQUEsc0RBQTJCLEVBQUMsZ0JBQU0sQ0FBQyxPQUFPLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFDM0QsUUFBUSxFQUNSLElBQUEsNkNBQXFCLEVBQUMsUUFBUSxDQUFDLENBQ2xDLENBQUMsQ0FBQyJ9