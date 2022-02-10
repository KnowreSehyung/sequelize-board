const HttpException = require("./http.exception");

class BadRequestException extends HttpException {
  constructor(msg = "잘못된 요청입니다.") {
    super(400, msg);
  }
}

module.exports = BadRequestException;
