import express from 'express'
import OpenAI from './providers/OpenAI'

const app = express()
const port = 3000
const openAI = new OpenAI()

app.get('/', async (_: express.Request, res: express.Response) => {
  const response = await openAI.createCompletion({
    model: "code-davinci-002",
    prompt: "<!-- Create a web page with the title 'WebsiteGPT: Website Designed with the OpenAI Codex Engine' -->\n<!DOCTYPE html>",
    temperature: 0.5,
    max_tokens: 1024,
    stop: '</html>'
  })
  res.send(response.data.choices[0].text)
})

app.listen(port, () => console.log(`SiteGPT listening on localhost:${port}`))

