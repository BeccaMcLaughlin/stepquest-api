import { QuestService } from '../../../src/application/services/QuestService';
import { GeminiAPI } from '../../../src/infrastructure/services/GeminiAPI';
import { Config } from '../../../src/application/config';
import { Quest } from '../../../src/domain/entities/Quest';
import { Character } from '../../../src/domain/value-objects/Character';

describe('QuestService', () => {
  test('Should call external service on fetchNewQuest', async () => {
    const externalService = new GeminiAPI(Config);
    const spyGenerateContent = jest
      .spyOn(externalService, 'sendRequest')
      .mockResolvedValue('{"objective": "Test objective", "steps": 400, "character": "Wizard"}');
    const questService = new QuestService(externalService);

    const quest = await questService.fetchNewQuest();
    expect(spyGenerateContent).toHaveBeenCalledTimes(1);
    expect(quest).toBeInstanceOf(Quest);
    expect(quest.details.objective).toBe('Test objective');
    expect(quest.details.steps).toBe(400);
    expect(quest.details.character).toBe(Character.Wizard);
  });
});
