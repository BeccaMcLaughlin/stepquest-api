import { Request, Response } from 'express';
import { QuestService } from '../../../application/services/QuestService';

export class QuestController {
  constructor (private questService: QuestService) {}

  async fetchNewQuest (req: Request, res: Response): Promise<void> {
    try {
      const quest = await this.questService.fetchNewQuest();
      res.status(200).send(quest);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
