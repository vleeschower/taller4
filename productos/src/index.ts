import express from "express"
import dotenv from "dotenv"
import productoRoutes  from "./routes/productos.routes.ts";

dotenv.config({path: "/home/taller4/productos/src/.env"});

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/productos", productoRoutes);

app.get("/", (req, res)=>{
    res.send("Hola mundo");
})

app.listen(port,()=>{
    console.log(`Escuchando en el puerto: ${port}`)
})
