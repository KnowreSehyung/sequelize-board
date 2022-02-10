const { Router } = require("express");
const resWarpper = require("../../lib/request.handler");
const BoardService = require("./board.service");

class BoardController {
  path = "/boards";
  router = Router();

  boardService = new BoardService();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    const router = Router();
    router.get("/", resWarpper(this.getAll.bind(this)));

    this.router.use(this.path, router);
  }

  async getAll() {
    return await this.boardService.findAll();
  }
}

module.exports = BoardController;
