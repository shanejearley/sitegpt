import { Configuration, OpenAIApi } from 'openai'
  
export default class OpenAI extends OpenAIApi {
  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })
    super(configuration)
  }
}