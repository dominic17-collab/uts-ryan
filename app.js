const { sequelize, User } = require('./models')
const express = require('express')
const app = express()
const produkRoutes = require('./routes/produkRoutes')

app.use(express.json())
app.use('/produk', produkRoutes)

async function start() {
  try {
    await sequelize.authenticate()
    console.log('✔ Koneksi ke database berhasil!')

    await sequelize.sync()
    console.log('✔ Model berhasil di-sync')

    app.listen(3000, () => {
      console.log("Server berjalan di http://localhost:3000");
    })

  } catch (error) {
    console.error('✘ Gagal konek database:', error)
  }
}

start()
