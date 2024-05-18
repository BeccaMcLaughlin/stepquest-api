import { Quest } from '../../../src/domain/entities/Quest';
import { v4 as uuidv4 } from 'uuid';
import { QuestDetails } from '../../../src/domain/value-objects/QuestDetails';
import { Character } from '../../../src/domain/value-objects/Character';

describe('Quest', () => {
  test('Should return instance of Quest with QuestDetails', () => {
    const questDetails = new QuestDetails('Climb a mountain', 5000, Character.Wizard);
    const quest = new Quest(uuidv4(), questDetails);

    expect(quest).toBeInstanceOf(Quest);
  });
});
