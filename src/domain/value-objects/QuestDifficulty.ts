import { Difficulty } from './Difficulty';

export class QuestDifficulty {
  private difficultyModifiers = {
    [Difficulty.EASY]: {
      steps: 500,
      additionalPrompt: 'The user doesn\'t want a challenge, make it easy for them!',
    },
    [Difficulty.MEDIUM]: {
      steps: 5000,
      additionalPrompt: 'The user doesn\'t want to walk any longer than an hour, this is a medium difficulty quest.',
    },
    [Difficulty.HARD]: {
      steps: 25000,
      additionalPrompt: 'The user wants a challenge, possibly spanning several days. Come up with an epic adventure for them.',
    },
  };

  constructor (
        private readonly difficulty: Difficulty,
  ) {}

  public getDifficultyModifiers ()
  {
    return this.difficultyModifiers[this.difficulty];
  }
}
