import express from "express";
import dotenv from "dotenv";
import usuariosRoutes  from "./routes/usuarios.routes.ts";

dotenv.config({ path: "/home/taller4/usuarios/src/.env" });

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Pagina Principal de usuarios");
});

app.get('/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, nombre: "Juan Perez", email: "juan@example.com" },
        { id: 2, nombre: "Ana Garcia", email: "ana@example.com" },
        { id: 3, nombre: "Carlos Lopez", email: "carlos@example.com" }
    ];
    res.json(usuarios);
});

app.use(express.json());
app.use("/rutas", usuariosRoutes);

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});