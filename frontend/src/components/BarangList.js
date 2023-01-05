import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const BarangList = () => {
    const [barang, setBarang] = useState([]);

    useEffect(() => {
        getBarang();
    }, []);

    const getBarang = async () => {
        const response = await axios.get("http://localhost:5000/barang");
        setBarang(response.data);
    }

    const deleteBarang= async(id) => {
        try {
            await axios.delete(`http://localhost:5000/barang/${id}`);
            getBarang();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container col-9 mt-5">
        <Link to={`tambah`} type="button" className="btn btn-success">
            <i className="bi bi-plus-square-fill me-2"></i>
            Tambah Data
        </Link>
        <table className="table mt-2">
            <thead className="table-light">
            <tr>
                <th>#</th>
                <th>Nama Barang</th>
                <th>Deskripsi</th>
                <th>Kategori</th>
                <th>Harga</th>
                <th>Stok</th>
                <th className="text-center">Aksi</th>
            </tr>
            </thead>
            <tbody>
                {barang.map((barang, index) => (
                    <tr key={barang.id}>
                        <td>{index + 1}</td>
                        <td>{barang.nm_barang}</td>
                        <td>{barang.deskripsi}</td>
                        <td>{barang.kategori}</td>
                        <td>{barang.harga}</td>
                        <td>{barang.stok}</td>
                        <td className="text-center">
                        <Link to={`ubah/${barang.id}`} type="button" className="btn btn-primary btn-sm me-1">
                        <i className="bi bi-pencil-square"></i>
                        </Link>
                        <button onClick={()=>deleteBarang(barang.id)} type="button" className="btn btn-danger btn-sm">
                        <i className="bi bi-trash"></i>
                        </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default BarangList;
