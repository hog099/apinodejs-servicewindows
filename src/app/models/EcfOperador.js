import Sequelize, { Model } from "sequelize";

class EcfOperador extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        id_ecf_funcionario: Sequelize.INTEGER,
        login: Sequelize.STRING,
        senha: Sequelize.STRING,
        cod_operador: Sequelize.INTEGER,
        cod_filial: Sequelize.INTEGER,
        sit: Sequelize.STRING,
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

export default EcfOperador;
