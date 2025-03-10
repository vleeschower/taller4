import express from "express";

export const getUsuario1 = (req: express.Request, res: express.Response) => {
    res.send('Usuario inicial');
};

export const getUsuario2 = (req: express.Request, res: express.Response) => {
    res.send('Usuario secundario');
};