const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Produk = sequelize.define('Produk', {
  id_prod: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama_produk: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  kategori: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'produk',
  timestamps: false // tabel tidak punya createdAt/updatedAt
})

module.exports = Produk
