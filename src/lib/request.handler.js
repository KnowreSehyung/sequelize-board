const resWarpper = (handler) => {
  return async (req, res, next) => {
    try {
      const response = await handler(req, res, next);
      const _response = {
        success: true,
        error: null,
        response,
      };
      res.json(_response);
    } catch (e) {
      next(e);
    }
  };
};

module.exports = resWarpper;
