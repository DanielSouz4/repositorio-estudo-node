var express = require('express')
var fs = require('fs')
const path = require('path')
var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('user')
})

app.listen(3000, () => console.log('Server Running on 3000'))

// configurar:
// npm install ejs
// 1 - set qual pasta irão estar os templates (usar path pra ajudar com o caminho)
// 2 - set qual template que está usando

// usar
// criar arquivo .ejs na pasta wiews
// para servir usar res.render('user')
// render() => p/ renderizar uma view através do template engine
