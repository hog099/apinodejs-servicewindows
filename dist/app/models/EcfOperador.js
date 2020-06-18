"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class EcfOperador extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: _sequelize2.default.INTEGER, primaryKey: true },
        id_ecf_funcionario: _sequelize2.default.INTEGER,
        login: _sequelize2.default.STRING,
        senha: _sequelize2.default.STRING,
        cod_operador: _sequelize2.default.INTEGER,
        cod_filial: _sequelize2.default.INTEGER,
        sit: _sequelize2.default.STRING,
      },
      {
        sequelize,
        tableName: "ecf_operador"
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.EcfFuncionario, { foreignKey: 'id_ecf_funcionario', as: "funcionario", targetKey: "id" })
  // }


}

exports. default = EcfOperador;
