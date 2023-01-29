import express from 'express'
import OpenAI from './providers/OpenAI'

const app = express()
const port = 3000
const openAI = new OpenAI()

app.get('/', async (_: express.Request, res: express.Response) => {
  const response = await openAI.createCompletion({
    model: "code-davinci-002",
    prompt: "<!-- Create a web page with the title 'SiteGPT', the subtitle 'Design by the OpenAI Codex Engine', and a gradient background -->\n<!DOCTYPE html>",
    temperature: 0.75,
    max_tokens: 512,
    stop: '</html>'
  })
  res.send(response.data.choices[0].text)
})

app.listen(port, () => console.log(`SiteGPT listening on localhost:${port}`))

