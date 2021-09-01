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

app.listen(3000, () => console.log('Server Running on 3000'))

// como fazer if no template engine
