const express = require("express");
const logger = require("morgan");
const { Router } = require("express");
const errorMiddleware = require("./middlewares/error.middleware");

const PORT = process.env.PORT ?? 3000;

class App {
  constructor(controllers) {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorMiddlewares();
  }

  listen() {
    this.app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  }

  getServer() {
    return this.app;
  }

  initializeMiddlewares() {
    // parser
    this.app.use(express.json());

    // logger
    this.app.use(logger("dev"));
  }

  initializeErrorMiddlewares() {
    // error middleware
    this.app.use(errorMiddleware);
  }

  initializeControllers(controllers) {
    const router = Router();
    router.get("/", (req, res) => res.send("pong"));

    controllers.forEach((con) => {
      router.use(con.router);
    });

    this.app.use("/api", router);
  }
}

module.exports = App;
