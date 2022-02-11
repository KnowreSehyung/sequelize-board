const db = require("../../models");

class BoardService {
  constructor() {
    this.board = db.Board;
  }

  get(page = 1) {
    const offset = page > 1 ? 10 * (page - 1) : 0;
    return this.board.findAll({
      offset,
      limit: 10,
      order: [["id", "DESC"]],
    });
  }

  create(data) {
    return this.board.create(data);
  }
}

module.exports = BoardService;
