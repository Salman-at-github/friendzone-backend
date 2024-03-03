const Post = require('../models/Post');
const { paginateResults } = require('../utils/paginator');

const getPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    // Fetch all posts count
    const totalPostsCount = await Post.countDocuments();

    // Paginate and fetch posts
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    // Use the paginator utility to structure the paginated results
    const paginatedResults = paginateResults(page, limit, posts);

    // Attach additional metadata to the response
    paginatedResults.totalPosts = totalPostsCount;
    paginatedResults.currentPage = page;

    // Respond with the paginated posts
    res.json(paginatedResults);
  } catch (error) {
    console.error('Error in fetching posts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { userId } = req.user; // Extract user ID from the authenticated user

    // Create a new post associated with the user
    const newPost = new Post({ title, content, user: userId });
    await newPost.save();

    // Respond with success
    res.json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error in creating post:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getPosts, createPost };
