const Post = require("../models/Post.js");

// Create a new post
const createPost = async (req, res) => {
  try {
    // The userId is extracted from req.user, which is set by the protect middleware
    const newPost = new Post({
      ...req.body, // Spread the title and content from the request body
      userId: req.user._id, // Assign the userId from the authenticated user
    });

    await newPost.save(); // Save the post to the database
    res.status(201).json(newPost); // Return the newly created post
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "username"); // Populate userId with the username
    res.json(posts); // Return all posts with user details
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createPost, getAllPosts };
