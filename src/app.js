import 'dotenv/config';
import path from 'path';
import express from 'express';
import cors from 'cors';

import http from 'http';
import io from "socket.io";

import routes from './routes';
import './database'

// Para logs no sistema
// import morgan from "morgan";
// morgan.token("body", function (req, res) { return JSON.stringify(req.body) });


class App {
    constructor() {
        this.app = express();
        this.server = http.Server(this.app);

        this.socket();


        this.middlewares();
        this.initialroute();
        // this.morganMiddleware();
        this.routes();

        this.connectedUsers = {};

    }

    socket() {
        this.io = io(this.server);

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
        this.app.use('/', express.static(path.join(__dirname, "..", "public")));
        // this.server.set('views', path.join(__dirname, 'public'));
        // this.server.engine('html', require('ejs').renderFile);
        // this.server.set('view engine', 'html');
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());

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
        this.app.use(routes);
    }


}

export default new App().server;
