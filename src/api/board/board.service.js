const db = require("../../models");

exports.findAll = async () => {
  try {
    return await db.Board.findAll();
  } catch (error) {
    return { error };
  }
};
