import { GenerationConfig, GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { Configuration } from '../../application/config';

export class GeminiAPI {
  private generationConfig: GenerationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 1000,
    responseMimeType: 'application/json',
  };
  private model: GenerativeModel;

  constructor (configuration: Configuration) {
    const genAi = new GoogleGenerativeAI(configuration.APP_GEMINI_API_KEY);
    this.model = genAi.getGenerativeModel({
      model: configuration.APP_GEMINI_MODEL,
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
