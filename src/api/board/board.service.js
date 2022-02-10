const db = require("../../models");

class BoardService {
  constructor() {
    this.board = db.Board;
  }

  findAll() {
    return this.board.findAll();
  }

  create(data) {
    return this.board.create(data);
  }
}

module.exports = BoardService;
