const { Router } = require("express");
const router = Router();

const boardController = require("../api/board/board.controller");
router.route("/").get(boardController.get);

module.exports = router;
