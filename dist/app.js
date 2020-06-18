"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _socketio = require('socket.io'); var _socketio2 = _interopRequireDefault(_socketio);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
require('./database');

// import morgan from "morgan";
// morgan.token("body", function (req, res) { return JSON.stringify(req.body) });


class App {
    constructor() {
        this.app = _express2.default.call(void 0, );
        this.server = _http2.default.Server(this.app);

        this.socket();


        this.middlewares();
        this.initialroute();
        // this.morganMiddleware();
        this.routes();

        this.connectedUsers = {};

    }

    socket() {
        this.io = _socketio2.default.call(void 0, this.server);

        this.io.on('connection', socket => {

            //Capta o id do usuario criado
            const { user_id } = socket.handshake.query;
            // console.log('USERRRR ID', user_id)
            if (user_id) {
                //Recebe o id do socketio, id unico ao user connectado
                this.connectedUsers[user_id] = socket.id;
            }

            socket.on("disconnect", () => {
                delete this.connectedUsers[user_id];
            });

        })
    }



    initialroute() {
        this.app.use('/', _express2.default.static(_path2.default.join(__dirname, "..", "public")));
        // this.server.set('views', path.join(__dirname, 'public'));
        // this.server.engine('html', require('ejs').renderFile);
        // this.server.set('view engine', 'html');
    }

    middlewares() {
        this.app.use(_cors2.default.call(void 0, ));
        this.app.use(_express2.default.json());

        this.app.use((req, res, next) => {
            req.io = this.io;
            req.connectedUsers = this.connectedUsers;

            next();
        });

    }

    // morganMiddleware(){
    //     this.server.use(
    //         morgan(
    //           "'Data ==>' :date[iso] :method :url 'Status ==>' :status :response-time ms - 'Conteudo Enviado ==>' :res[content-length] :body",
    //           { stream: fs.createWriteStream(__dirname + "/log/nomelog.log", {flags: "a"}) }
    //         )
    //       );
    // }


    routes() {
        this.app.use(_routes2.default);
    }


}

exports. default = new App().server;
