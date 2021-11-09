import {
    cmcBatchExchangeRepo,
    cachedExchangeRateRepo,
} from 'crypto-exchange-rate';
import { CMCModel } from 'crypto-exchange-rate';
import config from '../config';

const idMapper = CMCModel.idMapper();

export const cmcCachedExchange = cachedExchangeRateRepo(
    cmcBatchExchangeRepo(
        CMCModel.batchExchangeRateService(config.cmc_api, config.cmc_key),
        idMapper,
        CMCModel.exchangeRateDtoMapper(idMapper)
    )
);
