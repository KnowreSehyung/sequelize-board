const express = require("express");
const db = require("./models");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(`db connecting error ${e}`);
  });

// loger
app.use(logger("dev"));

// router
app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
