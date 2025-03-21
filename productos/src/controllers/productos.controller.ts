 import express from "express";
 import pool from '../db.js'

export const getAll = async (req: express.Request, res: express.Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM producto');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ message: 'Error al obtener productos', error: error.message });
    }
};

export const ActualizarProducto = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { nombre, precio, descripcion, categoria } = req.body;
        const [result] = await pool.query(
            'UPDATE producto SET nombre = ?, precio = ?, descripcion = ?, categoria = ? WHERE id = ?',
            [nombre, precio, descripcion, categoria, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto actualizado', result });
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ message: 'Error al actualizar producto', error: error.message });
    }
};

export const CrearProducto = async (req: express.Request, res: express.Response) => {
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

export const BorrarProducto = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM producto WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado', result });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ message: 'Error al eliminar producto', error: error.message });
    }
};