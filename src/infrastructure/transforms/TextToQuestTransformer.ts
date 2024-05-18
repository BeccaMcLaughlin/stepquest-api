import { QuestDetails } from '../../domain/value-objects/QuestDetails';
import { Character } from '../../domain/value-objects/Character';
import { Quest } from '../../domain/entities/Quest';
import { v4 as uuidv4 } from 'uuid';

export class TextToQuestTransformer {
  private readonly text: string;

  public constructor (text: string) {
    this.text = text;
  }

  public getQuest (): Quest {
    const questDetails = this.transformTextToQuestDetails();
    return new Quest(uuidv4(), questDetails);
  }

  private transformTextToQuestDetails (): QuestDetails {
    // Validate input but im lazy, so I'll just let ts throw err

    // Convert input
    const textAsObject = JSON.parse(this.text);
    return new QuestDetails(
      textAsObject.objective,
      textAsObject.steps,
            textAsObject.character as Character,
    );
  }
}
