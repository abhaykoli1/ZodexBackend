const express = require("express");
const {
  createBlogCategory,
  getBlogsCategory,
  getBlogCategoryById,
  updateBlogCategory,
  deleteBlogCategory,
} = require("../controllers/blog.ct.controller");

const router = express.Router();

router.post("/", createBlogCategory);
router.get("/", getBlogsCategory);
router.get("/:id", getBlogCategoryById);
router.put("/update/:id", updateBlogCategory);
router.delete("/:id", deleteBlogCategory);

module.exports = router;
