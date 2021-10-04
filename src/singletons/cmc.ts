import { cmcBatchExchangeRepo, cachedExchangeRateRepo } from "crypto-exchange-rate";
import { cmcBatchExchangeRateService } from "crypto-exchange-rate/dist/model/coinmarketcap/BatchExchangeRateService";
import { cmcIdMapper } from "crypto-exchange-rate/dist/model/coinmarketcap/CMCIdMapper";
import { exchangeRateDtoMapper } from "crypto-exchange-rate/dist/model/coinmarketcap/ExchangeRateDtoMapper";
import config from "../config";

const idMapper = cmcIdMapper();

export const cmcCachedExchange = cachedExchangeRateRepo(cmcBatchExchangeRepo(
    cmcBatchExchangeRateService(config.cmc_api, config.cmc_key),
    idMapper,
    exchangeRateDtoMapper(idMapper)
));