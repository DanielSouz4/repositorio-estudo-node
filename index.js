var express = require('express')
var app = express()

app.get('/', (req, res) => {
  console.log(req)
  res.send('<h1>Hello World</h1>')
})

app.listen(3000, () => console.log('Server rodando...'))
