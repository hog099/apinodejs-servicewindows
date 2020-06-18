"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _util = require('util');
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);


exports. default = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // console.log(authHeader);
    if(!authHeader){
        return res.status(401).json({error: "Token Não Encontrado para Realizar Operação"});
    }
    
    const [, token] = authHeader.split(' '); // receber do header de forma desestruturada para pegar somente o token pois a posicao [0] é o bearer

    try {
        
        const decoded = await _util.promisify.call(void 0, _jsonwebtoken2.default.verify)(token, _auth2.default.secret); // Transformar uma função de callback modelo antigo para utilizar async await
        // Valida se o token é valido e procede com a aplicação

        req.userId = decoded.id;

        return next();

    } catch (err) {
        return res.status(401).json({error: "Token Inválido para Realizar Operação"});
    }

    return next();

}