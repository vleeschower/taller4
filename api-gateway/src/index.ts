import express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

const app = express()

dotenv.config({path: "/home/taller4/api-gateway/src/.env"});
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Pagina principal de api-gateway");
})

app.get('/productos', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3002/productos/all');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3003/rutas/usuario1');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
});

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Escuchando en el puerto: ${port}`)
})