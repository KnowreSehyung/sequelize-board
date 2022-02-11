const db = require("../../models");

class BoardService {
  constructor() {
    this.board = db.Board;
  }

  get(page = 1) {
    const limit = 10;
    const offset = 0 + (page - 1) * limit;
    return this.board.findAll({
      offset,
      limit,
      order: [["id", "DESC"]],
    });
  }

  create(data) {
    return this.board.create(data);
  }
}

module.exports = BoardService;
