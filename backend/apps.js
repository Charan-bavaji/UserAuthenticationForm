const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('i am login')
  })
  app.get('/signin', (req, res) => {
    res.send('i am login')
  })
  app.get('/dashboard', (req, res) => {
    res.send('i am login')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})