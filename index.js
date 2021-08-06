const http = require('http')

http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ texto: '<h1>Hello World!</h1>' }))
  })
  .listen(3000, err => {
    if (err) {
      console.log(err)
    } else {
      console.log('Servidor Rodando na Porta 3000')
    }
  })

/* 
  
=> opções 'Content-Type':

- 'text/plain'
- 'text/html'
- 'application/json'

*/
