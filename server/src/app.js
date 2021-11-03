const express = require('express')
const { MongoClient } = require('mongodb')
const BlogController = require('./controllers/blogController.js')
const config = require('./config/local.json')

const app = express()
const dbClient = new MongoClient(config.connectString)
const blogController = new BlogController(dbClient)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.json())

app.get('/articles', async (req, res) => {
  try {
    res.send(await blogController.getAll())
  } catch (err) {
    res.status(500).body('Internal Error')
  }
})

app.post('/articles/add', async (req, res) => {
  if (await blogController.insertOne(req.body)) {
    res.status(201).send()
  } else {
    res.status(500).body('Internal Error')
  }
})

app.listen(config.serverPort, async () => {
  console.log('DB connection test...')

  try {
    await dbClient.connect()
    console.log('Connection test successful. Closing...')
    await dbClient.close()
  } catch (err) {
    console.error(err)
  }

  console.log('Server listening on port 3000')
})