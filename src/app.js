import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes";

class App {
  constructor() {
    dotenv.config();

    this.server = express();
    this.middleware();
    this.database();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
  }

  database() {
    mongoose
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
    this.server.use(routes);
  }
}

export default new App().server;
