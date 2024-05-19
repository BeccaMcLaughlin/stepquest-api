import { Quest } from '../../domain/entities/Quest';
import { IQuestService } from './IQuestService';
import { TextToQuestTransformer } from '../../infrastructure/transforms/TextToQuestTransformer';
import { GeminiAPI } from '../../infrastructure/services/GeminiAPI';
import { QuestDifficulty } from '../../domain/value-objects/QuestDifficulty';
import { Difficulty } from '../../domain/value-objects/Difficulty';

export class QuestService implements IQuestService {
  constructor (private geminiAPI: GeminiAPI) {}

  async fetchNewQuest (difficulty: Difficulty = Difficulty.EASY): Promise<Quest> {
    const response = await this.geminiAPI.sendRequest(this.generatePrompt(difficulty));
    const textToQuest = new TextToQuestTransformer(response);
    return textToQuest.getQuest();
  }

  generatePrompt (difficulty: Difficulty = Difficulty.EASY) {
    const questDifficulty = new QuestDifficulty(difficulty).getDifficultyModifiers();
    return `You are a fantasy quest giver. Create a new quest for me. ${questDifficulty.additionalPrompt} The output fields and a short description of each are below:
objective: A short description of a fantasy quest based on walking steps for an objective.
steps: An integer of the number of steps required to walk for this objective. Keep the number of steps around or below ${questDifficulty.steps}
character: Describes the tone of the objective. Choose from "Wizard" or "Townfolk" and weight each option at 50% chance.`;
  }
}
