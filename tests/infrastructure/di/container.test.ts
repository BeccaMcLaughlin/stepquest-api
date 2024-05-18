import { GeminiAPI } from '../../../src/infrastructure/services/GeminiAPI';
import { container } from '../../../src/infrastructure/di/container';
import { Configuration } from '../../../src/application/config';

describe('Dependency Injection Container', () => {
  it('should return an instance of Config from the container', () => {
    const config = container.resolve<Configuration>('config');
    expect(typeof config).toBe('object');
  });

  it('should return an instance of GeminiAPI from the container', () => {
    const geminiAPI = container.resolve<GeminiAPI>('geminiAPI');
    expect(geminiAPI).toBeInstanceOf(GeminiAPI);
  });

});
