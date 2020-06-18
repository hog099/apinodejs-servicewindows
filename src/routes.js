import { Router } from "express";
import path from "path";

// import IndexController from "./app/controllers/IndexController";

// import authMiddleware from './app/middlewares/auth';
const routes = new Router();

// Rotas livres de autenticação
routes.get("/", (req, res) => {
  return res.json({ok:true});
  // return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Rotas após essa linha passa pelo middleware de Authenticação REQUER TOKEN
// routes.use(authMiddleware);

export default routes;
