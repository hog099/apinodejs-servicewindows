"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

// import IndexController from "./app/controllers/IndexController";

// import authMiddleware from './app/middlewares/auth';
const routes = new (0, _express.Router)();

// Rotas livres de autenticação
routes.get("/", (req, res) => {
  // return res.json({ok:true});
  return res.sendFile(_path2.default.join(__dirname, "..", "public", "index.html"));
});

// Rotas após essa linha passa pelo middleware de Authenticação REQUER TOKEN
// routes.use(authMiddleware);

exports. default = routes;
