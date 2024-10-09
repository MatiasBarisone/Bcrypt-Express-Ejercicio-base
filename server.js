require('dotenv').config(); // Carga el archivo .env si lo necesitas
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bcryptjs = require('bcryptjs')

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenid@s a la API de Bcryptjs.' })
})

//GENERACION DE ENCRIPTADO
app.post('/encriptar', async (req, res) => {
  async function encriptarPWD() {
    const saltRounds = parseInt(process.env.SALTROUNDS); // Read SALTROUNDS from .env
    try {
      res.status(201).json({ message: 'Generación de hash exitosa.', saltRounds });
    } catch (error) {
      res.status(400).json('Debe enviar una clave válida para encriptar');
    }  
}
})

app.post('/comparar', (req, res) => {
  try{
    const {password, hash}
  }
}


app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`))
