import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { users } from "../infrastructure/data";

const SECRET_KEY = "thisIsASecret";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // hashing password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  return res.status(201).json({
    message: "User registered successfully",
    user: newUser
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // comparing password
  const password_ = await bcrypt.compare(password, user.password);

  if (!password_) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  return res.status(200).json({
    message: "Login successful",
    token
  });
};