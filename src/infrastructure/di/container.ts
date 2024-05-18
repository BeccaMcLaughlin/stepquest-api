import { createContainer, asClass, asValue, InjectionMode } from 'awilix';
import { Config, Configuration } from '../../application/config';
import { GeminiAPI } from '../services/GeminiAPI';

const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register({
  config: asValue<Configuration>(Config),
  geminiAPI: asClass(GeminiAPI).singleton(),
});

export { container };
