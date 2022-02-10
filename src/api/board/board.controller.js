const boradService = require("./board.service");

exports.get = async (req, res, next) => {
  try {
    const data = await boradService.findAll();
    res.json(data);
  } catch (e) {
    next(e);
  }
};
