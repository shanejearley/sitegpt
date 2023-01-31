import OpenAI from './OpenAI'

export default class WebPage {
  htmlText = ''
  maxTokens = 512
  model = 'code-davinci-002'
  openAI: OpenAI
  prompt = `
    <!-- Create a marketing webpage with the title 'SiteGPT', the subtitle 'Design by the OpenAI Codex Engine', and a gradient background -->\n
    <!DOCTYPE html>
  `
  stop = '</html>'
  temperature = 0.75
  
  constructor() {
    this.openAI = new OpenAI()
  }

  async createHTMLText() {
    const completion = await this.openAI.createCompletion({
        max_tokens: this.maxTokens,
        model: this.model,
        prompt: this.prompt,
        stop: this.stop,
        temperature: this.temperature
      })
      const [completionHTML] = completion.data.choices
      const completionText = completionHTML.text as string
      this.htmlText = completionText.concat(this.stop)
    return this.htmlText
  }

  async getHTMLText() {
    if (!this.htmlText) {
      return await this.createHTMLText()
    }
    return this.htmlText
  }
}