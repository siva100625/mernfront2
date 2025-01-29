const express = require("express");
const { createReply, getRepliesByPost } = require("../controllers/replyController.js");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();
router.post("/create", protect, createReply);
router.get("/:postId", getRepliesByPost);

module.exports = router;
