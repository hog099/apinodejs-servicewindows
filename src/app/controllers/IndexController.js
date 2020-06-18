import { fn, col, literal } from "sequelize";

import EcfEmpresa from "../models/EcfEmpresa";
import ResCategory from "../models/ResCategory";
import ResMesa from "../models/ResMesa";
import Produto from "../models/Produto";

class IndexController {
  async index(req, res) {
   
    return res.status(200).json({ ok: true });
  }

}

export default new IndexController();
