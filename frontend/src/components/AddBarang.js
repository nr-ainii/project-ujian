import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddBarang = () => {
    const [nm_barang, setNm_Barang] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [kategori, setKategori] = useState("");
    const [harga, setHarga] = useState("");
    const [stok, setStok] = useState("");

    const navigate = useNavigate();

    const saveBarang = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/barang',{
                nm_barang,
                deskripsi,
                kategori,
                harga,
                stok
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container col-9 mt-5">
        <h3 className="text-center mb-4">Form Tambah Data</h3>
        <form onSubmit={saveBarang} className="row">
            <div className="col-6">
            <div className="mb-3">
                <label for="nm_barang" className="form-label">
                Nama Barang
                </label>
                <input type="text" value={nm_barang} onChange={(e)=> setNm_Barang(e.target.value)} className="form-control" placeholder="Nama Barang" id="" />
            </div>
            <div className="mb-3">
                <label for="deskripsi" className="form-label">
                Deskripsi
                </label>
                <input type="text" value={deskripsi} onChange={(e)=> setDeskripsi(e.target.value)} className="form-control" placeholder="Deskripsi" id="" />
            </div>
            <div className="mb-3">
                <label for="kategori" className="form-label">
                Kategori
                </label>
                <input type="text" value={kategori} onChange={(e)=> setKategori(e.target.value)} className="form-control" placeholder="Kategori" id="" />
            </div>
            </div>
            <div className="col-6">
            <div className="mb-3">
                <label for="harga" className="form-label">
                Harga
                </label>
                <input type="text" value={harga} onChange={(e)=> setHarga(e.target.value)} className="form-control" placeholder="Harga" id="" />
            </div>
            <div className="mb-5">
                <label for="stok" className="form-label">
                Stok
                </label>
                <input type="text" value={stok} onChange={(e)=> setStok(e.target.value)} className="form-control" placeholder="Stok" id="" />
            </div>
            <button type="submit" className="btn btn-primary">
                Simpan
            </button>
            </div>
        </form>
        </div>
    );
};

export default AddBarang;
