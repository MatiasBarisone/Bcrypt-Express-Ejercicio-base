process.loadEnvFile()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bcryptjs = require('bcryptjs')

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenid@s a la API de Bcryptjs.' })
})

app.post('/encriptar', async (req, res) => {

})

app.post('/comparar', (req, res) => {
  const hashGenerado = 'agrega-aqui-el-hash-obtenido-con-el-otro-endpoint'
})

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`))
