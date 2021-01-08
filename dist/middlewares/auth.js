"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken');
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

exports. default = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "User not authorization" });
  }

  const [, token] = authHeader.split(" ");

  try {
    _jsonwebtoken.verify.call(void 0, token, process.env.KEY_TOKEN);
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid Jwt Token" });
  }
};
