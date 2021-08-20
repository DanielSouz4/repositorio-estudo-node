const express = require('express')

// app recebe objeto express (criar esse objeto express rodando o construtor)
const app = express()

// fazer app excutar requisiçõeas http
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`)
})
