const { get } = require('mongoose');
const BlogCategory = require('../models/blog.ct.model')



const createBlogCategory = async (req, res) => {
  try {
    const blogCategory = await BlogCategory.create(req.body);
    res.status(201).json({ success: true, data: blogCategory });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getBlogsCategory = async (req, res) => {
  try {
    const blogs = await BlogCategory.find();
    res.json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBlogCategoryById = async (req, res) => {
  try {
    const blogCategory = await BlogCategory.findById(req.params.id);
    if (!blogCategory)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    res.json({ success: true, data: blogCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateBlogCategory = async (req, res) => {
  try {
    const blog = await BlogCategory.findByIdAndUpdate(req.params.id, req.body, {
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

const deleteBlogCategory = async (req, res) => {
  try {
    const blogCategory = await BlogCategory.findByIdAndDelete(req.params.id);
    if (!blogCategory)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = {
  createBlogCategory,
  getBlogsCategory,
  getBlogCategoryById,
  updateBlogCategory,
  deleteBlogCategory
};