const Produk = require('../models/produk')

// CREATE
exports.createProduk = async (req, res) => {
  try {
    const { nama_produk, kategori } = req.body

    const produk = await Produk.create({ nama_produk, kategori })
    res.status(201).json({ message: "Produk ditambahkan", data: produk })
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message })
  }
}

// READ (ALL)
exports.getAllProduk = async (req, res) => {
  try {
    const produk = await Produk.findAll()
    res.json(produk)
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message })
  }
}

// READ (BY ID)
exports.getProdukById = async (req, res) => {
  try {
    const produk = await Produk.findByPk(req.params.id)

    if (!produk)
      return res.status(404).json({ message: "Produk tidak ditemukan" })

    res.json(produk)
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message })
  }
}

// UPDATE
exports.updateProduk = async (req, res) => {
  try {
    const produk = await Produk.findByPk(req.params.id)

    if (!produk)
      return res.status(404).json({ message: "Produk tidak ditemukan" })

    await produk.update(req.body)

    res.json({ message: "Produk diperbarui", data: produk })
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message })
  }
}

// DELETE
exports.deleteProduk = async (req, res) => {
  try {
    const produk = await Produk.findByPk(req.params.id)

    if (!produk)
      return res.status(404).json({ message: "Produk tidak ditemukan" })

    await produk.destroy()
    res.json({ message: "Produk dihapus" })
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message })
  }
}
