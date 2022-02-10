const BoardController = require("./api/board/board.controller");
const App = require("./app");
const db = require("./models");

function bootStrap() {
  db.sequelize
    .sync()
    .then(() => {
      console.log("db connected");
    })
    .catch((e) => {
      console.log(`db connecting error ${e}`);
    });

  const app = new App([new BoardController()]);
  app.listen();
}

bootStrap();
