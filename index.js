var express = require('express')
var app = express()
var aluno = require('./routes/aluno')

app.use(express.urlencoded())

app.use('/aluno', aluno)

app.get('/', (req, res) => {
  res.send('hello World')
})

app.listen(3000, () => console.log('Server rodando...'))

// como criar/pra q serve router
