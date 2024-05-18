import { Quest } from '../../domain/entities/Quest';

export interface IQuestService {
    fetchNewQuest(): Promise<Quest>;
}
