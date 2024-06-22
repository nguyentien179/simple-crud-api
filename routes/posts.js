import express from "express";
import {
  getPosts,
  getById,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getById);
router.put("/update/:id", updatePost);
router.post("/create", createPost);
router.delete("/delete/:id", deletePost);

export default router;
