var express = require('express')
var fs = require('fs')
const path = require('path')
var app = express()

let user = {
  name: 'Daniel',
  phone: '(111)125411'
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // res.render('user', { name: 'Daniel Souza', phone: '(234)54321' })
  res.render('user', user)
})

app.listen(3000, () => console.log('Server Running on 3000'))

// p/ preparar o template para um valor que seja variável
// usar padrão do ejs <%=name%> no template ejs
// se tirar o (=) não aparece a variável (o = indica que tem uma saída)
// no node passar os valores que quer substituir no formato de obj
