const express = require('express')
const path = require('path')
// ajudar a montar caminho dos arq

const app = express()
// app recebe objeto express (criar esse objeto express rodando o construtor)

app.use('/meusite', express.static(path.join(__dirname, 'client')))
// '/meusite' -> arq apenas servidos quando estiver um /meusite depois do endereço
// app.use(express.static()) -> p/ servir arq estáticos (primeir. procura o index.html)
// path.join(__dirname, 'cliente') -> passar o caminho
// __dirname - > colocado no lugar do "."
// 'client' - > pasta onde está os arq estáticos

app.get('/', (req, res) => {
  // res.set('Content-Type', 'text/html')

  res.type('json')
  res.send('<h1>hello world From GET</h1>')
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`)
})
// fazer app excutar requisiçõeas http
