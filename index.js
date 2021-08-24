var express = require('express')
var app = express()
var bodyPaser = require('body-parser')

let consoleBody = (req, res, next) => {
  console.log(req.body)
  next()
}

let hello = (req, res) => {
  res.send('hello World')
}

app.use('/', bodyPaser.json())
app.use('/', consoleBody)
app.get('/', hello)

app.post('/', hello)

app.listen(3000, () => console.log('Server rodando...'))

// uso prático body parser mdd muito utilizado
// (imprime corpo da require)
// npm install body-parser
