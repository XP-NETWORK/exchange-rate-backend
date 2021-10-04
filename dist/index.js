"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const cmc_1 = require("./singletons/cmc");
const SupportedCurrency_1 = require("crypto-exchange-rate/dist/model/domain/SupportedCurrency");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: config_1.default.cors }));
app.use(express_1.default.json());
app.use((0, express_rate_limit_1.default)({
    windowMs: config_1.default.rate_limit_ms,
    max: config_1.default.rate_limit_reqs
}));
app.get("/batch_data", async (_, res) => {
    const cache = await cmc_1.cmcCachedExchange.getBatchedRate(Object.values(SupportedCurrency_1.SupportedCurrency));
    const entries = Object.fromEntries(cache);
    res.set('Cache-Control', `public, max-age=${cmc_1.cmcCachedExchange.getCacheExpiry() / 1000}`);
    res.send(entries);
});
app.listen(config_1.default.port, () => `server listening @${config_1.default.port}`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBNEM7QUFDNUMsZ0RBQXdCO0FBQ3hCLHNEQUE4QjtBQUM5QiwwQ0FBcUQ7QUFDckQsZ0dBQTZGO0FBQzdGLDRFQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxFQUFDLEVBQUUsTUFBTSxFQUFFLGdCQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSw0QkFBUyxFQUFDO0lBQ2QsUUFBUSxFQUFFLGdCQUFNLENBQUMsYUFBYTtJQUM5QixHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxlQUFlO0NBQzlCLENBQUMsQ0FBQyxDQUFBO0FBZ0JILEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBNEIsRUFBRSxFQUFFO0lBQzdELE1BQU0sS0FBSyxHQUFHLE1BQU0sdUJBQWlCLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUNBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFrQixDQUFDO0lBRTNELEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLG1CQUFtQix1QkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ3RGLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixnQkFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUEifQ==