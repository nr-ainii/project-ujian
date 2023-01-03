import Barang from "../models/BarangModel.js";

export const tampilBarang = async(req, res) => {
    try {
        const response = await Barang.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const cariId = async(req, res) => {
    try {
        const response = await Barang.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const tambahBarang = async(req, res) => {
    try {
        await Barang.create(req.body);
        res.status(201).json({msg: "Data berhasil ditambah"});
    } catch (error) {
        console.log(error.message);
    }
}

export const ubahBarang = async(req, res) => {
    try {
        await Barang.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data berhasil diubah"});
    } catch (error) {
        console.log(error.message);
    }
}

export const hapusBarang = async(req, res) => {
    try {
        await Barang.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data berhasil dihapus"});
    } catch (error) {
        console.log(error.message);
    }
}