import { Request, Response } from 'express';
import { QuestService } from '../../../application/services/QuestService';
import { Difficulty } from '../../../domain/value-objects/Difficulty';

export class QuestController {
  constructor (private questService: QuestService) {}

  async fetchNewQuest (req: Request, res: Response): Promise<void> {
    try {
      const difficulty = req.get('difficulty') as Difficulty || Difficulty.EASY;
      const quest = await this.questService.fetchNewQuest(difficulty);
      res.status(200).send(quest);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
