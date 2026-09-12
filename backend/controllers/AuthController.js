const { UserModel } = require("../model/UserModel");
const { createToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");


//signup
const signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const user = await UserModel.create({
      email,
      username,
      password,
    });

    const token = createToken(user._id);

        res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};


//login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = createToken(user._id);

      res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { signup , login };