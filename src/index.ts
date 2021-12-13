import express, { Response } from 'express';
import cors from 'cors';
import config from './config';
import { cmcCachedExchange } from './singletons/cmc';
import { SupportedCurrency } from 'crypto-exchange-rate/dist/model/domain/SupportedCurrency';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(cors({ origin: config.cors }));
app.use(express.json());
app.use(
    rateLimit({
        windowMs: config.rate_limit_ms,
        max: config.rate_limit_reqs,
    })
);

type BatchDataResp = {
    [key in SupportedCurrency]: number;
};

app.get('/exchange/batch_data', async (_, res: Response<BatchDataResp>) => {
    const cache = await cmcCachedExchange.getBatchedRate(
        Object.values(SupportedCurrency)
    );
    const entries = Object.fromEntries(cache) as BatchDataResp;

    res.set(
        'Cache-Control',
        `public, max-age=${cmcCachedExchange.getCacheExpiry() / 1000}`
    );
    res.send(entries);
});

app.listen(config.port, () => `server listening @${config.port}`);
