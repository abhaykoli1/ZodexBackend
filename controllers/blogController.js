const BlogSchema = require('../models/blog.model');

const createBlog = async (req, res) => {
  try {
    const blog = await BlogSchema.create(req.body);
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogSchema.find();
    res.json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await BlogSchema.findById(req.params.id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await BlogSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await BlogSchema.findByIdAndDelete(req.params.id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};