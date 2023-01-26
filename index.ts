import express from 'express'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

const app = express()
const port = 3000

app.get('/', async (_: express.Request, res: express.Response) => {
  const response = await openai.createCompletion({
    model: "code-davinci-002",
    prompt: "<!-- Create a web page with the title 'SiteGPT', the tagline 'Website by OpenAI Codex', and a gradient background -->\n<!DOCTYPE html>",
    temperature: 0,
    max_tokens: 256 * 2
  })
  console.log(response.data.choices[0].text)
  res.send(response.data.choices[0].text)
})

app.listen(port, () => console.log(`server started at localhost:${port}`))