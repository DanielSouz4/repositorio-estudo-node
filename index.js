var express = require('express')
var fs = require('fs')
const path = require('path')
var app = express()

let users = [
  {
    id: 0,
    name: 'Daniel',
    phone: '(111)125411'
  },
  {
    id: 4,
    name: 'José',
    phone: '(111)125411'
  },
  {
    id: 2,
    name: 'Marcos',
    phone: '(111)125411'
  }
]

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('user', { users })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(3000, () => console.log('Server Running on 3000'))

// partials => para fazer um elemento que vai está em várias páginas
// crair pasta partials
// crair arq .ejs para esse elemento específico

// para incluir esse elemento em alguma pág
// <%- include("./partials/navbar.ejs")%>
// <%- include("partials/navbar")%>
// não precisa do ./ nem .ejs já esta set em app.set('views', path.join(__dirname, 'views'))
//
// pode para passar uma variável no partials
// <h1>Logo - <%=title%></h1>
// e passar um valor pra essa variável quando for incluir o partials em páginas
//<%- include("partials/navbar", {title: "About"})%>
