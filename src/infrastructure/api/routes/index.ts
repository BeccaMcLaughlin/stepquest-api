import * as controllers from '../controllers';
import { Router } from 'express';

export const ApiRouter = (questController: controllers.QuestController): Router => {
  const router = Router();

  router.get('/new', questController.fetchNewQuest.bind(questController));

  return router;
};
