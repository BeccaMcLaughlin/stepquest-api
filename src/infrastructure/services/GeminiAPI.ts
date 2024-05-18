import { GenerationConfig, GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { Configuration } from '../../application/config';
import { IGeminiAPI } from './IGeminiAPI';

export class GeminiAPI implements IGeminiAPI {
  private generationConfig: GenerationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 1000,
    responseMimeType: 'application/json',
  };
  private model: GenerativeModel;

  constructor (config: Configuration) {
    const genAi = new GoogleGenerativeAI(config.APP_GEMINI_API_KEY);
    this.model = genAi.getGenerativeModel({
      model: config.APP_GEMINI_MODEL,
      generationConfig: this.generationConfig,
    });
  }

  public async sendRequest (prompt: string): Promise<string>
  {
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}
