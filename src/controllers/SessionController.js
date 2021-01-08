import { compare } from "bcryptjs";
import dotenv from "dotenv";
import { response } from "express";
import { sign } from "jsonwebtoken";
import User from "../models/User";

class SessionController {
  constructor() {
    dotenv.config();
  }

  async create(req, res) {
    const { username, password } = req.body;

    let user = await User.findOne({
      username,
    });

    if (!user) {
      return response.status(404).json({ error: "User not found!" });
    }

    const matchPaswword = await compare(password, user.password);

    if (!matchPaswword) {
      return response.status(404).json({ error: "Incorrect password" });
    }

    const token = sign({}, process.env.KEY_TOKEN, {
      subject: new String(user._id),
      expiresIn: "1d",
    });

    return res.json({
      token,
      user,
    });
  }
}

export default new SessionController();
