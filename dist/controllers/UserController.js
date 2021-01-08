"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcryptjs = require('bcryptjs');
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async create(req, res) {
    const { name, email, username, password, phone } = req.body;

    const passwordCrypt = await _bcryptjs.hash.call(void 0, password, 8);

    const user = await _User2.default.create({
      name,
      email,
      username,
      password: passwordCrypt,
      phone,
    });

    return res.json(user);
  }

  async index(req, res) {
    const users = await _User2.default.find();
    return res.json(users);
  }
}

exports. default = new UserController();
