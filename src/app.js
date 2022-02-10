const express = require("express");
const logger = require("morgan");
const { Router } = require("express");

const PORT = process.env.PORT || 3000;

class App {
  constructor(controllers) {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
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
    this.app.use(logger("dev"));
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
