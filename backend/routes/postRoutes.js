const express = require("express");
const { createPost, getAllPosts } = require("../controllers/postController.js");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();
router.post("/create", protect, createPost);
router.get("/", getAllPosts);

module.exports = router;
