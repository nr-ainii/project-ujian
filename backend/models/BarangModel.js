import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize

const Barang = db.define('barang',{
    nm_barang: DataTypes.STRING,
    kategori: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    stok: DataTypes.INTEGER
},{
    freezeTableName: true
})

export default Barang;

(async()=>{ await db.sync() })()