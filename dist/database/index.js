"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);


var _EcfOperador = require('../app/models/EcfOperador'); var _EcfOperador2 = _interopRequireDefault(_EcfOperador);

const models = [_EcfOperador2.default];


const ConnectionDatabase = new (0, _sequelize2.default)(_database2.default);

models
    .map(model => model.init(ConnectionDatabase))
    .map(model => model.associate && model.associate(ConnectionDatabase.models));

exports. default = ConnectionDatabase;



// class Database {

//   constructor(){
//     this.init();

//   }

//   init(){
//     this.connection = new Sequelize(databaseConfig);

//     models
//     .map(model=> model.init(this.connection) )
//     .map(model=> model.associate && model.associate(this.connection.models) );


//   }

// }

// export default new Database();
