const errorMiddleware = (err, req, res, next) => {
  const status = err.status ?? 500;
  const message = err.message;

  res.status(status).json({
    success: false,
    response: null,
    error: {
      status,
      message,
    },
  });

  next();
};

module.exports = errorMiddleware;
