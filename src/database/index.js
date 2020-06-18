import Sequelize from 'sequelize';
import databaseConfig from '../config/database';


import EcfOperador from '../app/models/EcfOperador';

const models = [EcfOperador];


const ConnectionDatabase = new Sequelize(databaseConfig);

models
    .map(model => model.init(ConnectionDatabase))
    .map(model => model.associate && model.associate(ConnectionDatabase.models));

export default ConnectionDatabase;



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
