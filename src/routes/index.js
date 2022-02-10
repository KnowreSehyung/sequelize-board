const { Router } = require("express");
const router = Router();

router.use("/", require("./board.route"));

module.exports = router;
