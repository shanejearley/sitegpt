import express from 'express'
import Webpage from './providers/Webpage'
const app = express()
const port = 3000
const webpage = new Webpage()

app.get('/', async (_: express.Request, res: express.Response) => {
  const html = await webpage.getHTMLText()
  res.send(html)
})

app.get('/create', async (_: express.Request, res: express.Response) => {
  const html = await webpage.createHTMLText()
  res.send(html)
})

app.listen(port, () => console.log(`SiteGPT listening on localhost:${port}`))

