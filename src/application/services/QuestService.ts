import { Quest } from '../../domain/entities/Quest';
import { IQuestService } from './IQuestService';
import { GeminiAPI } from '../../infrastructure/services/GeminiAPI';
import { TextToQuestTransformer } from '../../infrastructure/transforms/TextToQuestTransformer';

export class QuestService implements IQuestService {
  constructor (private geminiApi: GeminiAPI) {}

  async fetchNewQuest (): Promise<Quest> {
    const fetchNewQuestPrompt = 'You are a fantasy quest giver. Create a new quest for me. The output fields and a short description of each are below:\n\nobjective: A short description of a fantasy quest based on walking steps for an objective.\nsteps: An integer of the number of steps required to walk for this objective.\ncharacter: Describes the tone of the objective. Choose from "Wizard" or "Townfolk"';
    const response = await this.geminiApi.sendRequest(fetchNewQuestPrompt);
    const textToQuest = new TextToQuestTransformer(response);
    return textToQuest.getQuest();
  }
}
