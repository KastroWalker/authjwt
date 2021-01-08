"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const UserSchema = new (0, _mongoose.Schema)({
  name: String,
  email: String,
  username: String,
  password: String,
  phone: String,
});

exports. default = _mongoose2.default.model("Users", UserSchema);
