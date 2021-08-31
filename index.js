var express = require('express')
var fs = require('fs')
var app = express()

let user = {
  id: 0,
  name: 'Daniel s',
  phone: '(222)234-4321'
}

// fazendo um loop em todas chaves do obj e buscar no tamplate essas chaves substituir pelo valor do obj
function render(data, obj) {
  for (let key in obj) {
    data = data.replace(`{{{${key}}}}`, obj[key])
  }

  return data
}

app.get('/', (req, res) => {
  fs.readFile('./template/user.progbr', 'UTF-8', (err, data) => {
    if (!err) {
      // replace() retorna uma string com os dados subsituidos
      data = data.replace('{{{nome}}}', user.name)
      data = data.replace('{{{telefone}}}', user.phone)

      res.send(render(data, user))
    }
  })
})

app.listen(3000, () => console.log('Server Running on 3000'))

// como modificando um html que será enviado não precisa ser.html
