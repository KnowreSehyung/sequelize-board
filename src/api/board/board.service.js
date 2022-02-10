const db = require("../../models");

class BoardService {
  constructor() {
    this.board = db.Board;
  }

  findAll() {
    return this.board.findAll();
  }
}

module.exports = BoardService;
