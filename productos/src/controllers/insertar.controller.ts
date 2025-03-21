import express from "express";
import pool from '../db.js'

export const createProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { id, nombre, precio, descripcion, categoria } = req.body;
        const [result] = await pool.query(
            'INSERT INTO producto (id, nombre, precio, descripcion, categoria) VALUES (?, ?, ?, ?, ?)',
            [id, nombre, precio, descripcion, categoria]
        );
        res.status(201).json({ message: 'Producto creado', result });
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({ message: 'Error al crear producto', error: error.message });
    }
};