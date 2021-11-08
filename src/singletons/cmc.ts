import {
    cmcBatchExchangeRepo,
    cachedExchangeRateRepo,
} from 'crypto-exchange-rate';
import { CMCModel } from 'crypto-exchange-rate';
import { exchangeRateDtoMapper } from 'crypto-exchange-rate/dist/model/coinmarketcap/ExchangeRateDtoMapper';
import config from '../config';

const idMapper = CMCModel.idMapper();

export const cmcCachedExchange = cachedExchangeRateRepo(
    cmcBatchExchangeRepo(
        CMCModel.batchExchangeRateService(config.cmc_api, config.cmc_key),
        idMapper,
        exchangeRateDtoMapper(idMapper)
    )
);
