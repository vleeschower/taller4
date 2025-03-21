import { Router } from "express";
import { getAll, ActualizarProducto, CrearProducto, BorrarProducto } from "../controllers/productos.controller.ts";
const router = Router();

router.get("/all", getAll);
router.put("/:id", ActualizarProducto);
router.post("/create", CrearProducto);
router.delete("/:id", BorrarProducto);

export default router;
