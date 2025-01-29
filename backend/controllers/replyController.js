const Reply = require("../models/Reply");

const createReply = async (req, res) => {
  try {
    const newReply = new Reply({ ...req.body });
    await newReply.save();
    res.status(201).json(newReply);
  } catch (error) {
    res.status(500).json({ error: "Failed to create reply" });
  }
};

const getRepliesByPost = async (req, res) => {
  try {
    const replies = await Reply.find({ postId: req.params.postId }).populate("userId", "username");
    res.json(replies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve replies" });
  }
};

module.exports = {
  createReply,
  getRepliesByPost,
};
