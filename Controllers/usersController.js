import jwt from "jsonwebtoken";
import usersModel from "../Models/allUsersModel.js";

export async function signUp(req, res) {
  try {
    const temp = await usersModel.findOne({ email: req.body.email });
    if (temp) {
      res.json({ success: false, error: "email already exists!!!" });
    }
    let cart = {};
    for (let index = 0; index < 300; index++) {
      cart[index] = 0;
    }
    let user = new usersModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cart: cart,
    });
    await user.save();
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data,'secret_ecom');
    res.json({ success: true, token });
  } catch (e) {
    console.log(e);
  }
}

export async function login(req, res) {
  try {

    const {name, email, password } = req.body;

    // Check if the user with the provided email exists
    const user = await usersModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, error: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      return res.json({ success: false, error: "Invalid password" });
    }

    // If email and password are valid, create and send a JWT token
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, 'secret_ecom');

    res.json({ success: true, token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

