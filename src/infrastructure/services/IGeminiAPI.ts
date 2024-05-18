export interface IGeminiAPI {
  sendRequest(prompt: string): Promise<string>;
}
