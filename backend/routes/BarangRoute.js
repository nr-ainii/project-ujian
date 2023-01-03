import express from "express";
import { cariId, hapusBarang, tambahBarang, tampilBarang, ubahBarang } from "../controller/BarangController.js";

const router = express.Router();

router.get("/barang", tampilBarang);
router.get("/barang/:id", cariId);
router.post("/barang", tambahBarang);
router.patch("/barang/:id", ubahBarang);
router.delete("/barang/:id", hapusBarang);

export default router;
