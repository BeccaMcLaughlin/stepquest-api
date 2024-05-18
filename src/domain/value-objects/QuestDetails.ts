import { Character } from './Character';

export class QuestDetails {
  constructor (
        public objective: string,
        public steps: number,
        public character: Character,
  ) {}
}
