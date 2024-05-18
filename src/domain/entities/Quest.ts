import { QuestDetails } from '../value-objects/QuestDetails';

export class Quest {
  constructor (
        public id: string,
        public details: QuestDetails,
  ) {}
}
