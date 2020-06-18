"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');

var _EcfEmpresa = require('../models/EcfEmpresa'); var _EcfEmpresa2 = _interopRequireDefault(_EcfEmpresa);
var _ResCategory = require('../models/ResCategory'); var _ResCategory2 = _interopRequireDefault(_ResCategory);
var _ResMesa = require('../models/ResMesa'); var _ResMesa2 = _interopRequireDefault(_ResMesa);
var _Produto = require('../models/Produto'); var _Produto2 = _interopRequireDefault(_Produto);

class IndexController {
  async index(req, res) {
   
    return res.status(200).json({ ok: true });
  }

}

exports. default = new IndexController();
