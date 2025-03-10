import { Router } from "express";

import { getUsuario1, getUsuario2 } from "../controllers/usuarios.controller.ts";

const router = Router();

router.get('/usuario1', getUsuario1);
router.get('/usuario2', getUsuario2);

export default router;