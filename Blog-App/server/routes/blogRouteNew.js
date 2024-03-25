import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/blogControllerNew";
const router = express.Router();
// createUser
// POST => http://localhost:5000/api/v1/user
router.post("/", createUser);

// getAllUsers
// GET => http://localhost:5000/api/v1/user
router.get("/", getAllUsers);

// getUserById
// GET => http://localhost:5000/api/v1/user/:id
router.get("/:id", getUserById);

// updateUserById
// PUT => http://localhost:5000/api/v1/user/:id
router.put("/:id", updateUserById);

// deleteUserById
// DELETE => http://localhost:5000/api/v1/user/:id
router.delete("/:id", deleteUserById);

export default router;
