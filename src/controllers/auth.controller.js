import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

export const signUp = async (req, res) => {
  try {
    const { username, cedula, password, roles } = req.body;

    const newUser = new User({
      username,
      cedula,
      password: await User.encryptPassword(password),
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    const response = {
      username: savedUser.username
    }

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, // 30 min
    });

    res.status(200).json({ token, response });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const signIn = async (req, res) => {
  try {
    const userFound = await User.findOne({ cedula: req.body.cedula }).populate(
      "roles"
    );

    if (!userFound) return res.status(401).json({ message: "El usuario no existe" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({ token: null, message: "Contraseña incorrecta" });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400, // 30 min
    });

    const response = {
      username: userFound.username,
      role: userFound.roles
    }

    res.json({ token, response });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
