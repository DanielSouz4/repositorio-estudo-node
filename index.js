var express = require('express')
var app = express()

let alunos = [
  { id: 0, nome: 'jose' },
  { id: 1, nome: 'Maria' },
  { id: 2, nome: 'Joao' },
  { id: 3, nome: 'Marcos' }
]

app.use(express.urlencoded())
// pega os dados da requisição no formato form

app.get('/', (req, res) => {
  res.send('hello World')
})

app.get('/alunos', (req, res) => {
  res.json(JSON.stringify(alunos))
})

// sistema que recebe um id através do formulário e retorna um aluno correspondente
app.get('/aluno', (req, res) => {
  console.log(req.body)
  console.log(req.query)
  let aluno = alunos[req.query.id]
  res.json(aluno)
})

// outra maneira (permite chamadas ex: localhost:300/aluno/2)
// app.get('/aluno/:id', (req, res) => {
//   console.log(req.params.id)
//   let aluno = alunos[req.params.id]
//   res.json(aluno)
// })

// outra maneira usando query
// rota?id=2

app.listen(3000, () => console.log('Server rodando...'))

// rota é o path ex: "/alunos"
