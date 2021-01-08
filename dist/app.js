"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
  constructor() {
    _dotenv2.default.config();

    this.server = _express2.default.call(void 0, );
    this.middleware();
    this.database();
    this.routes();
  }

  middleware() {
    this.server.use(_express2.default.json());
  }

  database() {
    _mongoose2.default
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Conectado com sucesso");
      })
      .catch((error) => {
        console.log("Erro ao se conectar com o banco");
        console.log(error);
      });
  }

  routes() {
    this.server.use(_routes2.default);
  }
}

exports. default = new App().server;
