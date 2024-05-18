import { createContainer, asClass, asValue, InjectionMode, asFunction } from 'awilix';
import { Config, Configuration } from '../../application/config';
import { GeminiAPI } from '../services/GeminiAPI';
import { QuestService } from '../../application/services/QuestService';
import * as Controllers from '../../infrastructure/api/controllers';
import { ApiRouter } from '../api/routes';
const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

container
  .register({
    config: asValue<Configuration>(Config),
    geminiAPI: asClass(GeminiAPI).singleton(),
    questService: asClass(QuestService).singleton(),
  })
  .register({
    apiRouter: asFunction(ApiRouter).singleton(),
  })
  .register({
    questController: asClass(Controllers.QuestController).singleton(),
  });

export { container };
