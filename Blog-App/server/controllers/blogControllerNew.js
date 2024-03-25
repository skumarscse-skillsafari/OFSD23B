import { User } from "../models/blogModelNew.js";
// CreateUser
export const createUser = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await new User(req.body).save();
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

// GetAllUsers
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ success: true, data: allUsers });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

// GetUserById
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

// UpdateUserById
export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

// DeleteUserById
export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
