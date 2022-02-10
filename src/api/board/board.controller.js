const { Router } = require("express");
const BadRequestException = require("../../common/exceptions/bad-request.exception");
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
    router.post("/post", resWarpper(this.create.bind(this)));

    this.router.use(this.path, router);
  }

  async getAll(req, res) {
    return await this.boardService.findAll();
  }

  async create(req, res) {
    const { author = "", title = "", content = "" } = req.body;
    if (author === "") {
      throw new BadRequestException("작성자가 필요합니다.");
    }
    if (title === "") {
      throw new BadRequestException("제목이 필요합니다.");
    }
    if (content === "") {
      throw new BadRequestException("내용이 필요합니다.");
    }
    await this.boardService.create({ author, title, content });
  }
}

module.exports = BoardController;
