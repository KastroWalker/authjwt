"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcryptjs = require('bcryptjs');
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _express = require('express');
var _jsonwebtoken = require('jsonwebtoken');
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class SessionController {
  constructor() {
    _dotenv2.default.config();
  }

  async create(req, res) {
    const { username, password } = req.body;

    let user = await _User2.default.findOne({
      username,
    });

    if (!user) {
      return _express.response.status(404).json({ error: "User not found!" });
    }

    const matchPaswword = await _bcryptjs.compare.call(void 0, password, user.password);

    if (!matchPaswword) {
      return _express.response.status(404).json({ error: "Incorrect password" });
    }

    const token = _jsonwebtoken.sign.call(void 0, {}, process.env.KEY_TOKEN, {
      subject: new String(user._id),
      expiresIn: "1d",
    });

    return res.json({
      token,
      user,
    });
  }
}

exports. default = new SessionController();
